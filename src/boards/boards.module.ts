import { Module } from '@nestjs/common';
import { BoardsController } from './boards.controller';

@Module({
    imports: [],
    controllers: [BoardsController],
})
export class BoardModule {}
