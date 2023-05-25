import { Injectable, NotAcceptableException, NotFoundException } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Board } from './board.entity';
import { BoardRepository } from './board.repository';
import { CreateBoardDto } from './dto/create-board.dto';

@Injectable()
export class BoardsService {
  constructor(
    @InjectRepository(BoardRepository)
    private boardRepository: BoardRepository
  ) {}

  async getAllBoard(): Promise<Board[]> {
    const boardList = await this.boardRepository.find();

    if (!boardList) {
      throw new NotFoundException(`Can't find Board table`)
    }

    return boardList
  }

  async getBoardById(id: number): Promise<Board> {
    const found = await this.boardRepository.findOne({
      where: { id }
    });

    if (!found) {
      throw new NotFoundException(`Can't find Board with id ${id}`)
    }

    return found
  }

  async createBoard(createBoardDto: CreateBoardDto): Promise<Board> {
    const createdBoard = await this.boardRepository.createBoard(createBoardDto);

    if (!createdBoard) {
      throw new NotAcceptableException(`Can't create Board with id ${createBoardDto}`)
    }

    return createdBoard
  }
}
