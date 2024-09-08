# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2024-09-08

### Added

- Initial release of React Flexible Modal
- `showModal` function for displaying modals
- `closeModal` function for programmatically closing modals
- `ModalContainer` component for managing modal rendering
- Support for custom modal components
- TypeScript support with type definitions
- Ability to pass custom props to modal components
- Singleton `ModalManager` for centralized modal state management
- UUID-based unique identifiers for each modal
- React 17 and 18 compatibility
- Basic documentation and usage examples in README.md

### Features

- Lightweight implementation with minimal dependencies
- Flexible API allowing for various modal types and designs
- Inspired by the simplicity of shadcn's Sonner and the flexibility of SweetAlert2
- Easy integration with existing React projects

### Developer Experience

- TypeScript definitions for improved type checking and autocompletion
- Clear and concise API for showing and managing modals
- Customizable modal components for maximum flexibility

### Documentation

- Comprehensive README with installation instructions, basic and advanced usage examples
- API documentation for main functions and components
- TypeScript usage instructions
- Contribution guidelines and license information

### Dependencies

- React (peer dependency)
- React DOM (peer dependency)
- UUID for generating unique modal identifiers

### Development Setup

- TypeScript configuration for building the library
- Basic project structure for a React library
- NPM scripts for building the project

This initial release provides a solid foundation for a flexible and customizable modal system in React applications. Future releases will build upon this base, adding more features and improvements based on user feedback and needs.
