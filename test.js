const numbers = [1, 2, 3, 4, 5];

// With index
numbers.forEach((number, index) => {
    console.log(`Element at index ${index} is ${number}`);
});

// With an array of objects
const users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 }
];

users.forEach(user => {
    console.log(`${user.name} is ${user.age} years old`);
});