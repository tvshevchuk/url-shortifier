import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { v4 as uuid } from 'uuid';
import { User } from './user.entity';
import { AuthDto } from './auth.dto';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(User) private userRepository: Repository<User>
    ) {}

    createUser(authDto: AuthDto) {
        const user = this.userRepository.create({
            id: uuid(),
            email: authDto.email,
            password: authDto.password
        });

        return this.userRepository.save(user);
    }
}
