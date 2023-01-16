import { Module } from '@nestjs/common';
import { BoardsController } from './boards.controller';
import { BoardRepository } from './board.repository';
import { BoardsService } from './boards.service';
import { TypeOrmExModule } from './configs/typeorm-ex.module';

@Module({
    imports: [
        // TypeOrmModule.forFeature([BoardRepository]),
        TypeOrmExModule.forCustomRepository([BoardRepository]),
    ],
    controllers: [BoardsController],
    providers: [BoardsService]
})
export class BoardModule {}
