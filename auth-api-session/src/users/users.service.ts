import { Injectable } from '@nestjs/common';

export type User = {
  id: number;
  username: string;
  email: string;
  password: string;
};
@Injectable()
export class UsersService {
  private readonly users: User[] = [
    {
      id: 1,
      username: 'Aman Kumar',
      email: 'aman@gmail.com',
      password: 'Aman@123',
    },
    {
      id: 2,
      username: 'Rahul Kumar',
      email: 'rahul@gmail.com',
      password: 'Rahul@123',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
