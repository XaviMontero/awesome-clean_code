import { DomainEvent, EventBus } from "../../event/EventBus";
import { NotificationService } from "./NotificationService";

export class Video extends DomainEvent {
  constructor(
    readonly id: string,
    readonly title: string,
    readonly author: string,
    readonly publisher: string
  ) {
    super();
  }

  public static create(
    id: string,
    title: string,
    author: string,
    publisher: string,
    notificationService: NotificationService
  ): Video {
    const v = new Video(id, title, author, publisher);

    // Configuramos el sistema usando la instancia singleton
    const eventBus = EventBus.getInstance();
    eventBus.subscribe("Video", notificationService);
    eventBus.publish(v);

    return v;
  }
}