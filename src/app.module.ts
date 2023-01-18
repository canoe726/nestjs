import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { AuthModule } from './auth/auth.module'
import { BoardModule } from './boards/boards.module'
import { typeORMConfig } from './configs/typeorm.config'

@Module({
  imports: [TypeOrmModule.forRoot(typeORMConfig), BoardModule, AuthModule],
})
export class AppModule {}
