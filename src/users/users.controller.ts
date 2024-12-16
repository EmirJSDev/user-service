import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get('reset-problems')
    async resetProblems(): Promise<{ count: number }> {
        const count = await this.usersService.resetProblemsFlag();
        return { count };
    }
}
