import { Module } from '@nestjs/common';
import { UsersService } from './users.service';

@Module({
  providers: [UsersService],
  exports: [UsersService]    //exporting this for auth module
})
export class UsersModule { }
