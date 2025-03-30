import { Request, Response } from 'express';
import { Video } from '../models/SRP/Video';
import { CreateVideoDto } from '../models/SRP/dto/CreateVideoDto';

export const createVideo = async (req: Request, res: Response): Promise<void> => {
  try {
    const videoData: CreateVideoDto = req.body;

    if (!videoData.id || !videoData.title || !videoData.author || !videoData.publisher) {
      res.status(400).json({
        error: 'Todos los campos son requeridos: id, title, author, publisher'
      });
      return;
    }

    const video = Video.create(
      videoData.id,
      videoData.title,
      videoData.author,
      videoData.publisher
    );

    res.status(201).json({
      message: 'Video creado exitosamente',
      video: {
        id: video.id,
        title: video.title,
        author: video.author,
        publisher: video.publisher,
        occurredAt: video.occurredAt
      }
    });
  } catch (error) {
    res.status(500).json({
      error: 'Error interno del servidor al crear el video'
    });
  }
};