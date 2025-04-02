import { Book } from "../models/SRP/Book";
import { BookRepository } from "./BookRepository";


export class RedisBookRepository implements BookRepository {
  async create(book: Book): Promise<Book> {
    return book;
    }
  async findById(id: string): Promise<Book | null> {
    return null;
  }
  async findByTitle(title: string): Promise<Book | null> {
    return null;
  }
  async update(book: Book): Promise<Book> {
    return book;
  }
  async delete(id: string): Promise<void> {
    return;
  }
}

