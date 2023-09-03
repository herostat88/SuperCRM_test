import { IsEmail, IsNotEmpty } from '@nestjs/class-validator';

export class LoginDto {  
    @IsNotEmpty()  readonly email: string;
    @IsNotEmpty()  @IsEmail()  readonly password: string;
}

