import { IBookRepository } from "./interfaces/IBookRepository";
import { Book } from "../models/Book";
export class InMemoryBookRepository implements IBookRepository {
  private books: Book[] = [
    { id: "1", title: "Clean Code", author: "Robert Martin", isBorrowed: false },
    { id: "2", title: "Atomic Habits", author: "James Clear", isBorrowed: false },
    { id: "3", title: "The Pragmatic Programmer", author: "Andrew Hunt", isBorrowed: false },
    { id: "4", title: "Design Patterns", author: "Erich Gamma", isBorrowed: false },
    { id: "5", title: "Refactoring", author: "Martin Fowler", isBorrowed: false }
  ];
  async findAll(): Promise<Book[]> {
    return this.books;
  }
  async findById(id: string): Promise<Book | null> {
    return this.books.find(book => book.id === id) || null;
  }
  async save(book: Book): Promise<void> {
    this.books.push(book);
  }
  async update(updatedBook: Book): Promise<void> {
    this.books = this.books.map(book =>
      book.id === updatedBook.id ? updatedBook : book
    );
  }
}