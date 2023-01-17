import { Body, Controller, Get, Param, Post, UseGuards, UsePipes, ValidationPipe } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Board } from "./board-status";
import { BoardsService } from "./boards.service";
import { CreateBoardDto } from "./dto/create-board.dto";

@Controller('/boards')
@UseGuards(AuthGuard())
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
    createBoard(@Body() createBoardDto: CreateBoardDto): Promise<Board> {
        return this.boardsService.createBoard(createBoardDto);
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
