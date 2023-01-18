import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'

import { AuthService } from './auth.service'
import { GetUser } from './decorator/get-user.decorator'
import { AuthCredentialsDto } from './dto/auth-credential.dto'
import { User } from './user.entity'

@Controller('/auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  signUp(@Body() authCredentialsDto: AuthCredentialsDto): Promise<void> {
    return this.authService.signUp(authCredentialsDto)
  }

  @Post('/signin')
  signIn(@Body() authCredentialsDto: AuthCredentialsDto): Promise<{ accessToken: string }> {
    return this.authService.signIn(authCredentialsDto)
  }

  @Post('/authTest')
  @UseGuards(AuthGuard())
  test(@GetUser() user: User) {
    console.log('user : ', user)
  }
}
