# React Sweet Modal

[![npm version](https://badge.fury.io/js/sweet-modal-react.svg)](https://badge.fury.io/js/sweet-modal-react)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Sweet Modal React is a lightweight, customizable modal library for React applications. It provides an easy-to-use API for showing modals while allowing full customization of the modal's appearance and behavior.

## Features

- Simple API for showing and closing modals
- Customizable modal components
- TypeScript support
- Lightweight with minimal dependencies
- Easy integration with existing React projects

## Installation

Install the package using npm:

```
npm install sweet-modal-react
```

Or using yarn:

```
yarn add sweet-modal-react
```

## Usage

### Basic Usage

1. Wrap your app with the `ModalContainer` component:

```jsx
import { ModalContainer } from 'sweet-modal-react';
import CustomModal from './CustomModal';

function App() {
  return (
    <div>
      {/* Your app content */}
      <ModalContainer modalComponent={CustomModal} />
    </div>
  );
}
```

2. Create a custom modal component:

```jsx
import React from 'react';

const CustomModal = ({ modal, onClose }) => (
  <div className="modal">
    <h2>{modal.title}</h2>
    <p>{modal.content}</p>
    <button onClick={onClose}>Close</button>
  </div>
);

export default CustomModal;
```

3. Use the `showModal` function to display modals:

```jsx
import { showModal } from 'sweet-modal-react';

function MyComponent() {
  const handleClick = () => {
    showModal({
      title: 'Hello',
      content: 'This is a modal!',
      // Any other props you want to pass to your custom modal
    });
  };

  return <button onClick={handleClick}>Show Modal</button>;
}
```

### Advanced Usage

You can create multiple types of modals by using different custom components:

```jsx
import { ModalContainer, showModal } from 'sweet-modal-react';
import ConfirmationModal from './ConfirmationModal';
import InfoModal from './InfoModal';

function App() {
  const showConfirmation = () => {
    showModal({
      type: 'confirmation',
      title: 'Confirm Action',
      content: 'Are you sure you want to proceed?',
      onConfirm: () => console.log('Confirmed'),
      onCancel: () => console.log('Cancelled'),
    });
  };

  const showInfo = () => {
    showModal({
      type: 'info',
      title: 'Information',
      content: 'This is some important information.',
    });
  };

  const modalComponent = (props) => {
    switch (props.modal.type) {
      case 'confirmation':
        return <ConfirmationModal {...props} />;
      case 'info':
        return <InfoModal {...props} />;
      default:
        return null;
    }
  };

  return (
    <div>
      <button onClick={showConfirmation}>Show Confirmation</button>
      <button onClick={showInfo}>Show Info</button>
      <ModalContainer modalComponent={modalComponent} />
    </div>
  );
}
```

## API

### `showModal(options: ModalOptions): string`

Shows a modal with the given options. Returns the modal's unique ID.

### `closeModal(id: string): void`

Closes the modal with the given ID.

### `<ModalContainer modalComponent={YourCustomModal} />`

A component that manages the rendering of modals. It should be placed at the root of your app.

## TypeScript Support

This library includes TypeScript definitions. You can import types like this:

```typescript
import { ModalOptions, ModalItem, ModalComponent } from 'sweet-modal-react';
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

**Henrique Almeida**
- [GitHub](https://github.com/hicones)
- [LinkedIn](https://www.linkedin.com/in/henrique-almeida-079867169)
