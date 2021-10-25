interface IPerson {
    firstName: string;
    lastName: string;
    age: number;
}


const person: IPerson = {
    firstName: 'John',
    lastName: 'Doe',
    age: 35
}

console.log("Logging person created with person interface");
console.log("First name: " + person.firstName);
console.log("Last name: " + person.lastName);
console.log("Age: " + person.age);

/* 

An interface is a syntactical contract that an entity should conform to. In other words, an interface defines the syntax that any entity must adhere to.

Interfaces define properties, methods, and events, which are the members of the interface.
It often helps in providing a standard structure that the deriving classes would follow.

*/

