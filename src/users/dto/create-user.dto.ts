import { IsArray, IsEmail, IsNumber, IsString, MinLength } from "class-validator";
import { Roles } from "src/utility/user.enum";

export class CreateUserDto {
   
    @IsString()
    readonly username: string;

    @IsEmail()
    readonly email: string;

    @MinLength(8)
    @IsString()
    readonly password: string;

    @IsString({ each: true })
    readonly roles: Roles;
}
