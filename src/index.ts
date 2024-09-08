import ModalManager from "./modal-manager";
import ModalContainer from "./modal-container";
import { ModalOptions } from "./types";

export const showModal = (options: ModalOptions): string => {
  return ModalManager.getInstance().showModal(options);
};

export const closeModal = (id: string): void => {
  ModalManager.getInstance().closeModal(id);
};

export { ModalContainer };

export * from "./types";
