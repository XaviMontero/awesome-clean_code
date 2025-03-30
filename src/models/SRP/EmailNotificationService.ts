import { DomainEvent, EventListener } from "../../event/EventBus";
import { NotificationService } from "./NotificationService";

export class EmailNotificationService implements NotificationService {
  handle(event: DomainEvent): void {
    this.notify(event);
  }

  notify(event: DomainEvent): void {
    console.log('\n=== ENVIANDO EMAIL DE NOTIFICACIÓN ===');
    console.log('Timestamp:', new Date().toISOString());
    console.log('Evento:', event.constructor.name);
    console.log('Datos del evento:', JSON.stringify(event, null, 2));
    console.log('=====================================\n');
  }
}