import type { Book } from './Book';

export interface User {
  username: string | null;
  email: string | null;
  password: string | null;
  books: Book[];
}