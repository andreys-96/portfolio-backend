import { Injectable } from '@nestjs/common';
import { UserDto } from './user.interface';

@Injectable()
export class UsersService {
    constructor(
        private readonly usersRepository: UsersRepository,
    ) {}
  Init(info?: any): string {
    return `Hello USERS!${JSON.stringify(info)}`;
  }
  getAll(): UserDto[] {
    const users: UserDto[] = this.usersRepository.find();
    return users;
  }
}