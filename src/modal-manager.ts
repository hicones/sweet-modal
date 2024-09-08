import { v4 as uuidv4 } from "uuid";
import { ModalOptions, ModalItem } from "./types";

class ModalManager {
  private static instance: ModalManager;
  private modals: ModalItem[] = [];
  private listeners: Set<() => void> = new Set();

  private constructor() {}

  public static getInstance(): ModalManager {
    if (!ModalManager.instance) {
      ModalManager.instance = new ModalManager();
    }
    return ModalManager.instance;
  }

  public showModal(options: ModalOptions): string {
    const id = options.id || uuidv4();
    const modal: ModalItem = {
      ...options,
      id,
    };
    this.modals = [...this.modals, modal];
    this.notifyListeners();
    return id;
  }

  public closeModal(id: string): void {
    this.modals = this.modals.filter((modal) => modal.id !== id);
    this.notifyListeners();
  }

  public getModals(): ModalItem[] {
    return [...this.modals];
  }

  public addListener(listener: () => void): () => void {
    this.listeners.add(listener);
    return () => {
      this.listeners.delete(listener);
    };
  }

  private notifyListeners(): void {
    this.listeners.forEach((listener) => listener());
  }
}

export default ModalManager;
