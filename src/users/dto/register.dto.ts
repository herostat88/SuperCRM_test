import { IsEmail, IsNotEmpty } from '@nestjs/class-validator';

export class RegisterDto {
    @IsNotEmpty()  @IsEmail()  email: string;
    @IsNotEmpty()  password: string;
}

