import React from "react";

export interface ModalOptions {
  id?: string;
  [key: string]: any;
}

export interface ModalItem extends ModalOptions {
  id: string;
}

export interface ModalComponentProps {
  modal: ModalItem;
  onClose: () => void;
}

export type ModalComponent = React.ComponentType<ModalComponentProps>;
