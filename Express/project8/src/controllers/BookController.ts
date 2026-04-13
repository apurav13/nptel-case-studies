import { Request, Response } from "express";
import { BookService } from "../services/BookService";

export class BookController {
  constructor(private bookService: BookService) {}
  async getAll(req: Request, res: Response): Promise<void> {
    const books = await this.bookService.getAllBooks();
    res.json({ status: "success", data: books });
  }
  async borrowBook(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id as string;
      const book = await this.bookService.borrowBook(id);
      res.json({ status: "success", data: book });
    } catch (error: any) {
      res.status(400).json({ status: "error", error: error.message });
    }
  }
  async returnBook(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id as string;
      const book = await this.bookService.returnBook(id);
      res.json({ status: "success", data: book });
    } catch (error: any) {
      res.status(400).json({ status: "error", error: error.message });
    }
  }
}