import { drizzle } from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3';
import * as schema from './schemas';
import { Module } from '@nestjs/common';
import { SQLITE_CONNECTION } from '../constants';

@Module({
  providers: [
    {
      provide: SQLITE_CONNECTION,
      useFactory: () => {
        const sqlite = new Database('sqlite.db');
        return drizzle(sqlite, { schema });
      },
    },
  ],
  exports: [SQLITE_CONNECTION],
})
export class DrizzleModule {}
