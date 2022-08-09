import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class UserDto {
    @IsNumber()
    id: number;
    @IsString()
    name: string;
    @IsNotEmpty()
    age: string;
}