import { DomainEvent, EventListener } from "../../event/EventBus";
import { NotificationService } from "./NotificationService";
import { Video } from "./Video";
import { Book } from "./Book";

export class UniversalNotificationService implements NotificationService {
  handle(event: DomainEvent): void {
    this.notify(event);
  }

  notify(event: DomainEvent): void {
    console.log('\n=== NOTIFICACIÓN UNIVERSAL ===');
    console.log('Timestamp:', new Date().toISOString());

    if (event instanceof Video) {
      console.log('📹 Evento de Video:');
      console.log('Título:', event.title);
      console.log('Autor:', event.author);
    }
    else if (event instanceof Book) {
      console.log('👤 Evento de Book:');
      console.log('Nombre:', event.title);
      console.log('Email:', event.author);
    }

    console.log('==============================\n');
  }
}