import { Book } from "../../models/Book";
export interface IBookRepository {
  findAll(): Promise<Book[]>;
  findById(id: string): Promise<Book | null>;
  update(book: Book): Promise<void>;
  save(book: Book): Promise<void>;
}