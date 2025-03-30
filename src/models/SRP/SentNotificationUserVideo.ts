import { DomainEvent, EventListener } from "../../event/EventBus";
import { NotificationService } from "./NotificationService";

export class SentNotificationUserVideo implements EventListener, NotificationService {
  handle(event: DomainEvent): void {
    this.notify(event);
  }

  notify(event: DomainEvent): void {
    console.log('\n=== EVENTO DE NOTIFICACIÓN DE VIDEO ===');
    console.log('Timestamp:', new Date().toISOString());
    console.log('Evento:', event.constructor.name);
    console.log('Datos del evento:', JSON.stringify(event, null, 2));
    console.log('=====================================\n');
  }
}