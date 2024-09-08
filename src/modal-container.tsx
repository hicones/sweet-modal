import React from "react";
import ModalManager from "./modal-manager";
import { ModalComponent, ModalItem } from "./types";

interface ModalContainerProps {
  modalComponent: ModalComponent;
}

interface ModalContainerState {
  modals: ModalItem[];
}

class ModalContainer extends React.Component<
  ModalContainerProps,
  ModalContainerState
> {
  private unsubscribe: (() => void) | null = null;

  state: ModalContainerState = {
    modals: [],
  };

  componentDidMount() {
    this.unsubscribe = ModalManager.getInstance().addListener(
      this.updateModals
    );
    this.updateModals();
  }

  componentWillUnmount() {
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  }

  updateModals = () => {
    this.setState({ modals: ModalManager.getInstance().getModals() });
  };

  handleClose = (id: string) => {
    ModalManager.getInstance().closeModal(id);
  };

  render() {
    const { modalComponent: ModalComponent } = this.props;

    return (
      <>
        {this.state.modals.map((modal) => (
          <ModalComponent
            key={modal.id}
            modal={modal}
            onClose={() => this.handleClose(modal.id)}
          />
        ))}
      </>
    );
  }
}

export default ModalContainer;
