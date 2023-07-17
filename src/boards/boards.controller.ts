import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UsePipes,
  ValidationPipe
} from '@nestjs/common'

import { Board } from './board.entity'
import { BoardsService } from './boards.service'
import { CreateBoardDto } from './dto/create-board.dto'

@Controller('/boards')
// @UseGuards(AuthGuard())
export class BoardsController {
  // DI
  constructor(private boardsService: BoardsService) {}

  @Get('/')
  @UsePipes(ValidationPipe)
  getAllBoardList(): Promise<Board[]> {
    return this.boardsService.getAllBoard()
  }

  @Get('/:id')
  getBoardById(@Param('id') id: number): Promise<Board> {
    return this.boardsService.getBoardById(id)
  }

  @Post('/')
  @UsePipes(ValidationPipe) // handler-level
  createBoard(@Body() createBoardDto: CreateBoardDto): Promise<Board> {
    return this.boardsService.createBoard(createBoardDto)
  }

  @Delete('/:id')
  deleteBoard(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.boardsService.deleteBoard(id)
  }
}
