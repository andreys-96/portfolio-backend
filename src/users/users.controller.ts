import { Body, Controller, Get } from "@nestjs/common";
import { UserDto } from "./user.interface";
import { UsersService } from "./users.service";


@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('hello')
  getHello(@Body() body: any): string {
    return this.usersService.Init(body);
  }

  @Get()
    getAll(): UserDto[] {
      return this.usersService.getAll();
    }
}