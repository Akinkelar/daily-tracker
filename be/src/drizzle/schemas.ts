import { text, sqliteTable, integer } from 'drizzle-orm/sqlite-core';

export const users = sqliteTable('user', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  email: text('email'),
  password: text('password'),
});
