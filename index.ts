type User = {
    name: string;
    age:  number;
};

function makeOlder(user: User) {
    return {...user, age: user.age + 1};
}

function printUser(user: User) {
    console.log(`Name: ${user.name}, Age: ${user.age}`);
}

const user: User = { name: "Alice", age: 30 };

console.log(makeOlder(user)); // Output: { name: 'Alice', age: 31 }
printUser(user); // Output: Name: Alice, Age: 30    ]