import { Module } from '@nestjs/common'

import { TypeOrmExModule } from '../configs/typeorm-ex.module'
import { BoardRepository } from './board.repository'
import { BoardsController } from './boards.controller'
import { BoardsService } from './boards.service'

@Module({
  imports: [
    // TypeOrmModule.forFeature([BoardRepository]),
    TypeOrmExModule.forCustomRepository([BoardRepository]),
  ],
  controllers: [BoardsController],
  providers: [BoardsService],
})
export class BoardModule {}
