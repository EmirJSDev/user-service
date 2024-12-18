import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) {}

    async resetProblemsFlag(): Promise<number> {
        const count = await this.userRepository.count({ where: { problems: true } });
        await this.userRepository.update({}, { problems: false });
        return count;
    }
}
