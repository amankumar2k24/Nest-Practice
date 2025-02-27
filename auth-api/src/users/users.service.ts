import { Injectable } from '@nestjs/common';

export type User = {
    id: number,
    userName: string,
    email: string,
    password: string
}

@Injectable()
export class UsersService {
    private readonly users: User[] = [
        {
            id: 1,
            userName: "Aman Kumar",
            email: "aman@gmail.com",
            password: "Aman123"
        },
        {
            id: 2,
            userName: "Rahul Kumar",
            email: "rahul@gmail.com",
            password: "Rahul@123"
        },
    ]

    async findOne(userName: string): Promise<User | undefined> {
        return this.users.find(user => user.userName === userName)
    }
}
