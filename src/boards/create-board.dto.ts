/**
 * @doc
 * class-validator
 * https://github.com/typestack/class-validator
 */

import { IsNotEmpty } from "class-validator"

// 런타임에서 작동 -> DTO
export class CreateBoardDto {
  @IsNotEmpty()
  title: string

  @IsNotEmpty()
  description: string
}
