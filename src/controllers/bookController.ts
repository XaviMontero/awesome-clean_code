import { Request, Response } from 'express';
import { Book } from '../models/SRP/Book';
import { CreateBookDto } from '../models/SRP/dto/CreateBookDto';
import { RedisBookRepository } from '../db/RedisBookRepository';
import { BookRepository } from '../db/BookRepository';
import { MysqlBookRepository } from '../db/MysqBookRepository';

class BookService {
  private readonly mysqlRepo: BookRepository;
  private readonly redisRepo: BookRepository;

  constructor() {
    this.mysqlRepo = new MysqlBookRepository();
    this.redisRepo = new RedisBookRepository();
  }

  async createBook(book: Book): Promise<void> {
    await this.mysqlRepo.create(book);
    await this.redisRepo.create(book);
  }
}

const bookService = new BookService();

export const createBook = async (req: Request, res: Response): Promise<void> => {
  try {
    const bookData: CreateBookDto = req.body;

    if (!bookData.id || !bookData.title || !bookData.author || !bookData.publisher || !bookData.price) {
      res.status(400).json({
        error: 'Todos los campos son requeridos: id, title, author, publisher, price'
      });
      return;
    }

    const book = Book.create(
      bookData.id,
      bookData.title,
      bookData.author,
      bookData.publisher
    );

    await bookService.createBook(book);

    res.status(201).json({
      message: 'Libro creado exitosamente',
      book: {
        id: book.id,
        title: book.title,
        author: book.author,
        publisher: book.publisher
      }
    });
  } catch (error) {
    res.status(500).json({
      error: 'Error interno del servidor al crear el libro'
    });
  }
};
