import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';
import { v4 as uuid } from 'uuid';
import { User } from './user.entity';
import { AuthDto } from './auth.dto';
import { UserRepository } from './user.repository';
import { JwtPayload } from './jwt.strategy';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(User) private userRepository: UserRepository,
        private jwtService: JwtService
    ) {}

    async login(authDto: AuthDto) {
        const email = await this.userRepository.validateUserPassword(authDto);

        if (!email) {
            throw new UnauthorizedException('Invalid credentials');
        }

        const payload: JwtPayload = { email };
        const accessToken = await this.jwtService.sign(payload);

        return { accessToken }
    }

    createUser(authDto: AuthDto) {
        return this.userRepository.signUp(authDto);
    }
}
