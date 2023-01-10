import { Controller, Get } from "@nestjs/common";
import { BoardsService } from "./boards.service";

@Controller('/boards')
export class BoardsController {
    // DI
    constructor(private boardsService: BoardsService) {}

    // HTTP Method Handler
    @Get()
    getBoards(): string {
        this.boardsService
        return 'this action is boards'
    }
}

// @Controller('/boards')
// export class BoardsController {
//     boardsService: BoardsService;
    
//     constructor(boardsService: BoardsService) {
//         this.boardsService = boardsService
//     }
// }
