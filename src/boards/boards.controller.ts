import { Controller, Get } from "@nestjs/common";

@Controller('/boards')
export class BoardsController {
    // HTTP Method Handler
    @Get()
    getBoards(): string {
        return 'this action is boards'
    }
}