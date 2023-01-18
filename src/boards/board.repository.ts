import { HTTPStatusCodeInfoMap } from 'src/constants/HTTP.const'
import { HTTPResponse } from 'src/interfaces/HTTP.type'
import { Repository } from 'typeorm'

import { CustomRepository } from '../configs/typeorm-ex.decorator'
import { BoardStatus } from './board-status'
import { Board } from './board.entity'
import { CreateBoardDto } from './dto/create-board.dto'

/**
 * @doc
 * https://greeng00se.tistory.com/57
 * https://stackoverflow.com/questions/71557301/how-to-workraound-this-typeorm-error-entityrepository-is-deprecated-use-repo
 */
@CustomRepository(Board)
export class BoardRepository extends Repository<Board> {
  async createBoard(createBoardDto: CreateBoardDto): Promise<Board> {
    const { title, description } = createBoardDto

    const board = this.create({
      title,
      description,
      status: BoardStatus.PUBLIC,
    })

    await this.save(board)
    return board
  }
}
