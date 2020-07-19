import { Controller, Post, Body } from "@nestjs/common";
import { AuthDto } from "./auth.dto";

@Controller('auth')
export class AuthController {
    @Post('/login')
    login(@Body() authDto: AuthDto) {
        console.log(authDto);
    }
}