import { DomainEvent, EventBus } from "../../event/EventBus";

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
    publisher: string
  ): Video {
    const v = new Video(id, title, author, publisher);

    // Publicamos el evento
    const eventBus = EventBus.getInstance();
    eventBus.publish(v);

    return v;
  }
}