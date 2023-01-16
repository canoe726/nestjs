import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'

import { Board, BoardStatus } from './board-status'
import { BoardRepository } from './board.repository'
import { CreateBoardDto } from './dto/create-board.dto'

@Injectable()
export class BoardsService {
  constructor(private boardRepository: BoardRepository) {}

  // getAllBoards(): Board[] {
  //     return this.boards;
  // }

  async getBoardById(id: any): Promise<Board> {
    const found = await this.boardRepository.findOne(id)

    if (!found) {
      throw new NotFoundException(`Can't find Board with id ${id}`)
    }
    return found
  }

  // getBoardById(id: string): Board {
  //     return this.boards.find((board) => board.id === id)
  // }

  async createBoard(createBoardDto: CreateBoardDto): Promise<Board> {
    const { title, description } = createBoardDto
    console.log('boardRepository : ', this.boardRepository)
    const board = this.boardRepository.create({
      title,
      description,
      status: BoardStatus.PUBLIC,
    })

    await this.boardRepository.save(board)
    return board
  }

  // createBoard(createBoardDto: CreateBoardDto) {
  //     const { title, description } = createBoardDto

  //     const board: Board = {
  //         id: uuid(),
  //         title,
  //         description,
  //         status: BoardStatus.PUBLIC,
  //     }

  //     this.boards.push(board);
  //     return board
  // }

  // updateBoardStatus(id: string, status: BoardStatus): Board {
  //     const board = this.getBoardById(id)

  //     if (board) {
  //         board.status = status
  //         return board;
  //     } else {
  //         return null
  //     }
  // }

  // deleteBoard(id: string): void {
  //     const found = this.getBoardById(id);
  //     this.boards = this.boards.filter((board) => board.id !== found.id)
  // }
}
