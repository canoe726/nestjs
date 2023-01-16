import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { BoardModule } from './boards/boards.module';
import { typeORMConfig } from './boards/configs/typeorm.config';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeORMConfig),
    BoardModule,
  ],
})
export class AppModule {}
