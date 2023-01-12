import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put, UsePipes, ValidationPipe } from "@nestjs/common";
import { Board, BoardStatus } from "./boards.model";
import { BoardsService } from "./boards.service";
import { CreateBoardDto } from "./dto/create-board.dto";
import { BoardStatusValidationPipe } from "./pipes/board-status-validation.pipe";

@Controller('/boards')
export class BoardsController {
    // DI
    constructor(private boardsService: BoardsService) {}

    // HTTP Method Handler
    // @Get('/')
    // getBoards(): Board[] {
    //     return this.boardsService.getAllBoards()
    // }

    @Get('/:id')
    getBoardById(@Param('id') id: number): Promise<Board> {
        return this.boardsService.getBoardById(id)
    }

    // @Get('/:id')
    // getBoardById(@Param('id', ParseIntPipe) id: string): Board {
    //     return this.boardsService.getBoardById(id)
    // }

    @Post('/')
    @UsePipes(ValidationPipe) // handler-level
    createBoard(@Body() CreateBoardDto: CreateBoardDto): Promise<Board> {
        return this.boardsService.createBoard(CreateBoardDto);
    }

    // @Post('/')
    // @UsePipes(ValidationPipe) // handler-level
    // createBoard(@Body() CreateBoardDto: CreateBoardDto): Board {
    //     return this.boardsService.createBoard(CreateBoardDto);
    // }

    // @Patch('/:id/status')
    // updateBoard(
    //     @Param('id') id: string,
    //     @Body('status', BoardStatusValidationPipe) status: BoardStatus,
    // ): Board {
    //     return this.boardsService.updateBoardStatus(id, status);
    // }

    // @Delete('/:id')
    // deleteBoard(@Param('id') id: string): void {
    //     return this.boardsService.deleteBoard(id);
    // }
}

// @Controller('/boards')
// export class BoardsController {
//     boardsService: BoardsService;
//     constructor(boardsService: BoardsService) {
//         this.boardsService = boardsService
//     }
// }
