# 🛒 Task 2 | Responsive Product Page Layout

## 📚 Navigation

- [Project Description](#project-description)
- [Tech Stack](#tech-stack)
- [Features & Patterns Used](#features-and-patterns-used)
    - [Responsive Design](#responsive-design)
    - [Dynamic Product Gallery](#dynamic-product-gallery)
    - [Size Type Selection](#size-type-selection)
    - [Tabs for Product Details](#tabs-for-product-details)
    - [Modal Dialog Implementation](#modal-dialog-implementation)
    - [State Management](#state-management)
    - [Patterns, Methodologies, and Approaches](#patterns-methodologies-and-approaches)
- [Project Files Overview](#project-files-overview)
- [How to Run the Project](#how-to-run-the-project)
- [License](#license)

## Project Description

This project involves building a fully responsive product page based on a given Figma design. The page was developed using modern front-end technologies and best practices, focusing on delivering a clean, interactive, and user-friendly interface.

The main objectives of the project include implementing a fully responsive layout, ensuring proper semantic HTML usage, and creating interactive elements such as a product gallery, size type selector, and more. This project aims to provide an engaging shopping experience for users, whether they browse on mobile or desktop.

## Tech Stack

- **HTML**: Semantic structure of the product page.
- **SCSS**: CSS preprocessor for styling, used for variables, mixins, and organizing modular styles.
- **TypeScript (TS)**: Type safety, enhanced code quality, and maintenance.
- **React (Vite)**: Framework for building the user interface.
- **React Context**: Global state management for sharing product data.

## Features and Patterns Used

### Responsive Design

- The webpage has been designed to adapt smoothly across various screen sizes, with a particular focus on mobile (360px), tablet (725px), and desktop (1440px) resolutions.
- SCSS was used for styling with custom media queries, ensuring that the design follows modern responsive standards and scales correctly on different devices.

### Dynamic Product Gallery

- A dynamic gallery that shows the main product image and a set of thumbnails.
- Users can switch between images by clicking on thumbnails, and the main image updates accordingly.
- When switching between different product colors, the gallery updates to reflect the selected color.

### Size Type Selection

- Users can select shoe sizes from different size standards (e.g., UK, US, EU, CM).
- A dedicated size conversion system allows users to see size options based on the selected standard.
- Size options are displayed dynamically based on the selected product color.

### Tabs for Product Details

- Product details are organized in different tabs (e.g., Description, Shipping, Details) to ensure clarity and easy access to specific information.
- This allows users to quickly find the information they need without scrolling through long paragraphs.

### Modal Dialog Implementation

- A "Size Guide" modal dialog is implemented to help users make informed decisions regarding size selection.
- The modal is accessible via a button below the size selector and includes detailed information about how to find the right size.
- Users can click outside the modal to close it while it is open, enhancing the user experience by providing an intuitive way to dismiss the dialog.

### State Management

- **React Context** was used for managing product data throughout the application.
- Users can select between different product variants (colors, sizes), and the selected variant updates globally without prop-drilling.

### Patterns, Methodologies, and Approaches

- **Component-Based Architecture**: The project was built using a component-based approach to ensure reusable and maintainable code. Each component has a well-defined responsibility.
- **Atomic Design Methodology**: The components were organized following the atomic design principles, categorizing elements as atoms, molecules, organisms, etc., to create a consistent and scalable design system.
- **BEM Naming Convention**: The SCSS was structured using the BEM (Block Element Modifier) methodology to ensure a clear and maintainable CSS structure.
- **Responsive Web Design**: Implemented using a mobile-first approach and media queries to ensure a smooth transition across devices.
- **Separation of Concerns**: Logic, presentation, and styling are separated for better maintainability. TypeScript is used to ensure type safety, SCSS for styling, and React for UI components.
- **Custom Hooks**: Custom hooks were used for handling shared logic, such as managing the modal state, keeping the components clean, and enhancing code reusability.
- **Import Path Shortening Pattern**: Special pattern used in component development to shorten import paths. This was achieved by using an `index.ts` file for each component folder, which re-exports the default export. This allows shorter and more readable import statements, e.g., `import Subtitle from '@/components/Subtitle';`.

## Project Files Overview

- **src/components**: Contains reusable UI components for different parts of the product page.
    - **Product**: Components related to the product such as gallery, details, sizes, etc.
        - **Details**: Contains components for the product description, size guide, actions, and tabs.
        - **Gallery**: Includes components for managing the main product image (`MainImage.tsx`) and image thumbnails (`ImageThumbnails.tsx`).
        - **Sizes**: Implements the functionality for selecting sizes and converting between size types (`SizeList.tsx`, `UnitSelector.tsx`).
    - **Breadcrumb**: Contains the breadcrumb navigation components.
    - **Subtitle**: Subtitle component for headings within sections.
- **src/context**:
    - **ProductContext.tsx**: Provides the context for product data, including state and functions for selecting product variants.
- **src/styles**: Organized SCSS files for different components (`_gallery.scss`, `_details.scss`, `_information.scss`, etc.).
    - **utils**: Contains shared mixins (`_mixins.scss`) and variables (`_variables.scss`).
- **src/hooks**: Contains custom hooks used across the application, such as modal management hooks (`useModal.ts`).
- **src/constants**: Contains constant values, such as size conversion tables.
- **src/layouts**: Contains layout-specific components for organizing the product page structure.
- **src/types**: Defines TypeScript types used across the project to enhance code quality and maintainability.
- **src/assets**: Contains images, icons, and other media assets used throughout the project.

## How to Run the Project

To run this project locally, follow these steps:

### 1. Clone the Repository

```bash
git clone https://github.com/KhromenkoDaniel/gotoinc-test-tasks/tree/master/task2_responsive_layout
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:3000` (or another port if specified).

### 4. Build for Production

To create a production build, run:

```bash
npm run build
```

## License

This project is open-source and available under the MIT License.

