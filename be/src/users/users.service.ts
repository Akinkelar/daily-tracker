import { Inject, Injectable } from '@nestjs/common';
import { SQLITE_CONNECTION } from '../constants';
import { BetterSQLite3Database } from 'drizzle-orm/better-sqlite3';
import * as schema from '../drizzle/schemas';
import { UpdateUserDto } from './dto/update-user.dto';
@Injectable()
export class UsersService {
  constructor(
    @Inject(SQLITE_CONNECTION)
    private conn: BetterSQLite3Database<typeof schema>,
  ) {}
  // create(createUserDto: CreateUserDto) {
  //   return 'This action adds a new user';
  // }

  create() {
    throw new Error('am not implemented');
  }
  findAll() {
    return this.conn.query.users.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    console.log(updateUserDto);
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
