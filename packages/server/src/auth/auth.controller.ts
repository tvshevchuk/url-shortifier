import { Controller, Post, Body } from "@nestjs/common";
import { AuthDto } from "./auth.dto";
import { AuthService } from "./auth.service";

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('/login')
    login(@Body() authDto: AuthDto) {
        return this.authService.createUser(authDto);
    }
}