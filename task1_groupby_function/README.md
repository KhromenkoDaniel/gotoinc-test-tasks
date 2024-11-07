# 📦 Task 1 | GroupBy function

## 📚 Navigation
- [Project Description](#project-description)
- [Tech Stack](#tech-stack)
- [Features & Patterns Used](#features-patterns-used)
  - [Functional Programming Paradigm](#functional-programming-paradigm)
  - [Modular Code Structure](#modular-code-structure)
  - [TypeScript Generics](#typescript-generics)
  - [Best Practices Followed](#best-practices-followed)
- [Project Files Overview](#project-files-overview)
- [Explanation of Logic](#explanation-of-logic)
- [Running the Project](#running-the-project)
- [Examples of Usage](#examples-of-usage)
- [License](#license)

## Project Description

This project contains a utility function named `groupBy` which allows you to group an array of objects by a specified property or criteria function. The primary purpose of the `groupBy` function is to facilitate powerful data transformations that support both single-level and nested grouping, making it highly flexible and extensible.

The project is structured into modular files for easy maintenance and extensibility, and it includes thorough testing to ensure robust functionality.

## Tech Stack

- **TypeScript**: The project is implemented in TypeScript to ensure type safety and ease of development.
- **Node.js**: For running the tests and examples in the terminal.

## Features & Patterns Used

### Functional Programming Paradigm

The core logic for grouping is implemented with a functional programming approach, using `Array.prototype.reduce()` for transformation.

### Modular Code Structure

- **Separation of Concerns**: The project follows a modular structure:
  - **groupBy.ts**: Contains the core grouping logic.
  - **groupBy.types.ts**: Defines reusable TypeScript types used across the project.
  - **groupBy.tests.ts**: Contains all the test cases for the `groupBy` function.

### TypeScript Generics

The `groupBy` function uses TypeScript generics (`<T>`) to work seamlessly with arrays of any object type, allowing flexibility in usage.

### Best Practices Followed

- **KISS (Keep It Simple, Stupid)**: The logic is kept concise for readability while avoiding unnecessary complexity.
- **DRY (Don't Repeat Yourself)**: Reused logic, like filtering and nested grouping, is wrapped in reusable functions.
- **SOLID Principles**: The function adheres to the Single Responsibility Principle (SRP) by separating filtering, grouping, and type definitions into different components.

## Project Files Overview

- **groupBy.ts**: Implements the `groupBy` function that groups items by provided criteria or function.
- **groupBy.types.ts**: Contains type definitions such as `GroupByProperty`, `GroupByCriteria`, and `GroupedResult` to ensure type safety and readability.
- **groupBy.tests.ts**: Contains the tests and usage examples to validate the correctness of the `groupBy` function.
- **dummy\_data.ts**: Provides example datasets for testing, including handling missing properties and mixed data types.

## Explanation of Logic

The `groupBy` function is built to be highly flexible:

- **Filtering**: Optional filtering is supported before performing the grouping operation.
- **Grouping Logic**: The `groupBy` function takes two primary arguments:
  - **Array of Objects**: The data to be grouped.
  - **Grouping Criteria**: Either a property name or a function to determine the grouping key.
- **Nested Grouping**: If an array of criteria is provided, the function will recursively group by each criterion, allowing multi-level grouping.
- **Handling Undefined Keys**: If a property is missing or a function returns `undefined`, those elements are grouped under the key "undefined".

## Running the Project

To run the project, follow these steps:

### 1. Compile TypeScript

To compile TypeScript files to JavaScript:

```bash
tsc
```

### 2. Run the Tests

To run the test file and see the grouping examples:

```bash
node groupBy.test.js
```

## Examples of Usage

1. **Grouping by Property**:

```typescript
const groupedByCountry = groupBy(data, "country");
console.log(groupedByCountry);
```

2. **Nested Grouping**:

```typescript
const groupedByCountryAndCity = groupBy(data, ["country", "city"]);
console.log(groupedByCountryAndCity);
```

3. **Custom Grouping Function**:

```typescript
const groupedByAgeRange = groupBy(data, (person) => person.age >= 30 ? "30 and above" : "Below 30");
console.log(groupedByAgeRange);
```

## License

This project is open-source and available under the MIT License.
