import { EntityRepository, Repository } from "typeorm";
import { ConflictException, InternalServerErrorException } from "@nestjs/common";
import * as bcrypt from 'bcryptjs';
import { User } from "./user.entity";
import { AuthDto } from "./auth.dto";

@EntityRepository(User)
export class UserRepository extends Repository<User> {
    async signUp(authDto: AuthDto) {
        const user = new User();
        user.email = authDto.email;
        user.salt = await bcrypt.genSalt();
        console.log('salt', user.salt);
        user.password = await bcrypt.hash(authDto.password, user.salt);
        console.log('password', user.password);

        try {
            await user.save();
        } catch(error) {
            if (error.code === '23505') {
                throw new ConflictException('Username already exists');
            } else {
                throw new InternalServerErrorException();
            }
        }
    }

    async validateUserPassword(authDto: AuthDto): Promise<string> {
        const user = await this.findOne({ email: authDto.email });
        
        if (user && user.validatePassword(authDto.password)) {
            return user.email;
        } else {
            return null;
        }
    }
}