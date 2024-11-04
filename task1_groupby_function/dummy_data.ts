export const data = [
    { name: "Alice", age: 25, city: "New York", country: "USA" },
    { name: "Bob", age: 30, city: "Los Angeles", country: "USA" },
    { name: "Charlie", age: 25, city: "London", country: "UK" },
    { name: "David", age: 35, city: "New York", country: "USA" },
    { name: "Eve", age: 35, city: "Paris", country: "France" }
];

export const dataWithMissingProperties = [
    { name: "Alice", age: 25, country: "USA" },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 25, country: "UK" },
    { name: "David", age: 35, country: "USA" },
    { name: "Eve", age: 35 }
];

export const mixedData = [
    { value: "string value", type: "string" },
    { value: 42, type: "number" },
    { value: new Date(), type: "date" },
    { value: true, type: "boolean" },
    { value: null, type: "null" }
];
