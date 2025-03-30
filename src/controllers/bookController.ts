import { Request, Response } from 'express';
import { Book } from '../models/SRP/Book';
import { CreateBookDto } from '../models/SRP/dto/CreateBookDto';

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