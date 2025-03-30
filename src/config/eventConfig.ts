import { EventBus } from '../event/EventBus';
import { EmailNotificationService } from '../models/SRP/EmailNotificationService';
import { SentNotificationUserVideo } from '../models/SRP/SentNotificationUserVideo';


export const configureEventSubscriptions = () => {
  const eventBus = EventBus.getInstance();

  // Configurar todos los servicios que escuchan eventos de Video
  eventBus.subscribe("Video", new SentNotificationUserVideo());
  eventBus.subscribe("Video", new EmailNotificationService());

  console.log('✅ Event subscriptions configured successfully');
};