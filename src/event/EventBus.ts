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
  private configured: boolean = false;

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

    // Evitar duplicados
    const existingListeners = this.listeners.get(eventName)!;
    if (!existingListeners.some(l => l.constructor.name === listener.constructor.name)) {
      existingListeners.push(listener);
      console.log(`✅ Subscribed ${listener.constructor.name} to ${eventName}`);
    }
  }

  publish(event: DomainEvent) {
    const eventName = event.constructor.name;
    const eventListeners = this.listeners.get(eventName) || [];

    if (eventListeners.length === 0) {
      console.log(`⚠️ No listeners found for event: ${eventName}`);
      return;
    }

    console.log(`📢 Publishing event: ${eventName} to ${eventListeners.length} listeners`);
    for (const listener of eventListeners) {
      listener.handle(event);
    }
  }

  isConfigured(): boolean {
    return this.configured;
  }

  markAsConfigured() {
    this.configured = true;
  }
}