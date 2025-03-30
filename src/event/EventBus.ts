// 1. Interface para los subscriptores
export interface EventListener {
  handle(event: DomainEvent): void;
}

// 2. Clase base para eventos
export abstract class DomainEvent {
  readonly occurredAt: Date = new Date();
}

// 3. Clase EventBus (publicador de eventos)
export class EventBus {
  private static instance: EventBus;
  private listeners: Map<string, EventListener[]> = new Map();

  private constructor() {}

  static getInstance(): EventBus {
    if (!EventBus.instance) {
      EventBus.instance = new EventBus();
    }
    return EventBus.instance;
  }

  subscribe(eventName: string, listener: EventListener) {
    if (!this.listeners.has(eventName)) {
      this.listeners.set(eventName, []);
    }
    this.listeners.get(eventName)!.push(listener);
  }

  publish(event: DomainEvent) {
    const eventName = event.constructor.name;
    const eventListeners = this.listeners.get(eventName) || [];
    for (const listener of eventListeners) {
      listener.handle(event);
    }
  }
}