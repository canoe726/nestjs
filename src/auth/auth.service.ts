import { Injectable, UnauthorizedException } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import * as bcrypt from 'bcryptjs'

import { AuthCredentialsDto } from './dto/auth-credential.dto'
import { UserRepository } from './user.repository'

@Injectable()
export class AuthService {
  constructor(private userRepository: UserRepository, private jwtService: JwtService) {}

  async signUp(authCredentialsDto: AuthCredentialsDto): Promise<void> {
    return this.userRepository.createUser(authCredentialsDto)
  }

  async signIn(authCredentialsDto: AuthCredentialsDto): Promise<{ accessToken: string }> {
    const { username, password } = authCredentialsDto
    const user = await this.userRepository.findOne({ username } as any)

    if (user && (await bcrypt.compare(password, user.password))) {
      // 유저 토큰 생성 ( Secret + Payload )
      const payload = { username } // 중요한 정보는 생략
      const accessToken = await this.jwtService.sign(payload)

      return { accessToken }
    } else {
      throw new UnauthorizedException('login failed')
    }
  }
}
