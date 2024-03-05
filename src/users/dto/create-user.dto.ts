import { IsString } from "class-validator";
import { Roles } from "src/utility/user.enum";

export class CreateUserDto {

    @IsString()
    readonly username: string;

    @IsString()
    readonly email: string;

    @IsString()
    readonly password: string;

    @IsString({ each: true })
    readonly roles: Roles[];
}
