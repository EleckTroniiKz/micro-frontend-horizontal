import { Controller, Get, Post, Param } from '@nestjs/common';

import users, { User } from '../users';

@Controller('users')
export class UsersController {
  constructor() {}

  private users = users;

  private setUsers(users: User[]): void {
    this.users = users;
  }

  @Get()
  async index(): Promise<User[]> {
    return this.users;
  }

  @Get(':id')
  async show(@Param('id') id: string): Promise<User> {
    return this.users.find((user) => user.id === parseInt(id));
  }

  @Post('/newSave/:user')
  async saveNew(@Param('user') user: string): Promise<void> {
    const newUser = JSON.parse(user);
    newUser.id = this.users.length + 1;
    this.setUsers([...this.users, newUser]);
    return;
  }

  @Post('/save/:user')
  async save(@Param('user') user: string): Promise<void> {
    const oldUsers = [];
    const newUser = JSON.parse(user);
    if (
      newUser.name === '' ||
      newUser.gender === '' ||
      newUser.country === '' ||
      newUser.height === ''
    )
      return;
    if (!Object.keys(newUser).includes('id')) {
      newUser.id = this.users.length + 1;
      this.setUsers([...this.users, newUser]);
      return;
    }

    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].id !== newUser.id) {
        oldUsers.push(this.users[i]);
      } else {
        oldUsers.push(newUser);
      }
    }
    this.setUsers(oldUsers);

    return;
  }
}
