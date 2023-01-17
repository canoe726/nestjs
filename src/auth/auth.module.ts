import { AuthService } from './auth.service';
import { Module } from "@nestjs/common";
import { TypeOrmExModule } from "src/configs/typeorm-ex.module";
import { AuthController } from './auth.controller';
import { UserRepository } from './user.repository';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';

@Module({
    imports: [
        PassportModule.register({ defaultStrategy: 'jwt' }),
        JwtModule.register({
            secret: 'Secret1234',
            signOptions: {
                expiresIn: 1000 * 60,
            },
        }),
        // TypeOrmModule.forFeature([BoardRepository]),
        TypeOrmExModule.forCustomRepository([UserRepository]),
    ],
    controllers: [AuthController],
    providers: [AuthService, JwtStrategy],
    exports: [JwtStrategy, PassportModule]
})
export class AuthModule {}
