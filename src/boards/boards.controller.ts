import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put, UsePipes, ValidationPipe } from "@nestjs/common";
import { Board, BoardStatus } from "./board.model";
import { BoardsService } from "./boards.service";
import { CreateBoardDto } from "./create-board.dto";

@Controller('/boards')
export class BoardsController {
    // DI
    constructor(private boardsService: BoardsService) {}

    // HTTP Method Handler
    @Get('/')
    getBoards(): Board[] {
        return this.boardsService.getAllBoards()
    }

    @Get('/:id')
    getBoardById(@Param('id', ParseIntPipe) id: string): Board {
        return this.boardsService.getBoardById(id)
    }

    @Post('/')
    @UsePipes(ValidationPipe) // handler-level
    createBoard(@Body() CreateBoardDto: CreateBoardDto): Board {
        return this.boardsService.createBoard(CreateBoardDto);
    }

    @Patch('/:id')
    updateBoard(@Param('id') id: string, @Body('status') status: BoardStatus): Board {
        return this.boardsService.updateBoardStatus(id, status);
    }

    @Delete('/:id')
    deleteBoard(@Param('id') id: string): void {
        return this.boardsService.deleteBoard(id);
    }
}

// @Controller('/boards')
// export class BoardsController {
//     boardsService: BoardsService;
//     constructor(boardsService: BoardsService) {
//         this.boardsService = boardsService
//     }
// }
