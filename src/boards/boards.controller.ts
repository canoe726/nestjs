import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UseGuards,
  UsePipes,
  ValidationPipe
} from '@nestjs/common'

import { AuthGuard } from '@nestjs/passport'
import { GetUser } from 'src/auth/decorator/get-user.decorator'
import { User } from 'src/auth/user.entity'
import { Board } from './board.entity'
import { BoardsService } from './boards.service'
import { CreateBoardDto } from './dto/create-board.dto'

@Controller('/boards')
@UseGuards(AuthGuard())
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
  createBoard(@Body() createBoardDto: CreateBoardDto,
  @GetUser() user: User): Promise<Board> {
    console.log('user : ', user)
    return this.boardsService.createBoard(createBoardDto, user)
  }

  @Delete('/:id')
  deleteBoard(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.boardsService.deleteBoard(id)
  }
}
