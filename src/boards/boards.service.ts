import { Injectable, NotFoundException } from '@nestjs/common'
import { HTTPStatusCodeInfoMap } from 'src/constants/HTTP.const'
import { HTTPResponse } from 'src/interfaces/HTTP.type'

import { Board, BoardStatus } from './board-status'
import { BoardRepository } from './board.repository'
import { CreateBoardDto } from './dto/create-board.dto'

@Injectable()
export class BoardsService {
  constructor(private boardRepository: BoardRepository) {}

  // getAllBoards(): Board[] {
  //     return this.boards;
  // }

  async getBoardById(id: number): Promise<HTTPResponse<Board, null>> {
    const statusCode = 200
    const { error, message } = HTTPStatusCodeInfoMap[statusCode]

    const found = await this.boardRepository.findOneBy({ id })

    // TODO: https://jakekwak.gitbook.io/nestjs/overview/untitled
    if (!found) {
      throw new NotFoundException(`Can't find Board with id ${id}`)
    }

    return {
      data: found,
      statusCode,
      error,
      message,
      timestamp: new Date(Date.now()).toLocaleString(),
      meta: null,
    }
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
