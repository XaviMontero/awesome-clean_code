import { EventBus } from '../event/EventBus';
import { SentNotificationUserVideo } from '../models/SRP/SentNotificationUserVideo';
import { EmailNotificationService } from '../models/SRP/EmailNotificationService';
import { BookNotificationService } from '../models/SRP/BookNotificationService';
import { UniversalNotificationService } from '../models/SRP/UniversalNotificationService';

export const configureEventSubscriptions = () => {
  const eventBus = EventBus.getInstance();

  // Servicios específicos
  eventBus.subscribe("Video", new SentNotificationUserVideo());
  eventBus.subscribe("Video", new EmailNotificationService());
  eventBus.subscribe("Book", new BookNotificationService());

  // Servicio universal que maneja múltiples tipos de eventos
  eventBus.subscribe("Video", new UniversalNotificationService());
  eventBus.subscribe("Book", new UniversalNotificationService());

  console.log('✅ Event subscriptions configured successfully');
};