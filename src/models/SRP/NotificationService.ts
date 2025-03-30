import { DomainEvent, EventListener } from "../../event/EventBus";

export interface NotificationService extends EventListener {
  notify(event: DomainEvent): void;
}