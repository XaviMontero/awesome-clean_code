import { DomainEvent } from "../event/EventBus";
import { NotificationService } from "./SRP/NotificationService";


export class SMSNotificationService implements NotificationService {
  handle(event: DomainEvent): void {
    this.notify(event);
  }

  notify(event: DomainEvent): void {
    console.log('\n=== EVENTO DE NOTIFICACIÓN DE VIDEO ===');
    console.log('Notificación por SMS enviada:', event);
    console.log('=====================================\n');
  }
}
