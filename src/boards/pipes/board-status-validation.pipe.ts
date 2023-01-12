import { ArgumentMetadata, BadRequestException, PipeTransform } from '@nestjs/common'

import { BoardStatus } from '../boards.model'

export class BoardStatusValidationPipe implements PipeTransform {
  readonly StatusOptions = [BoardStatus.PRIVATE, BoardStatus.PUBLIC]

  transform(value: string, metadata: ArgumentMetadata) {
    value = value.toUpperCase()

    if (!this.isStatusValid(value)) {
      throw new BadRequestException(`${value} is not valid`)
    }

    return value
  }

  private isStatusValid(status: any) {
    const index = this.StatusOptions.indexOf(status)
    return index !== -1
  }
}
