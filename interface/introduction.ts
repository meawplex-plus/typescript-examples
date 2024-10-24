interface Person {
  name: string; // Req #1: String for name
  age: number; // Req #2: Number for age
}

function printDetails(person: Person) {
  console.log("Person " + person.name + " who is " + person.age + " years old");
}

let bob: Person = {
  name: "Bob",
  age: 25,
};

let robert: { name: string; age: number } = {
  name: "Jan",
  age: 56,
};

// Bob is a Person, so we can print his details
printDetails(bob);

// However, we can also use objects that have the exact same properties as a Person as valid Persons.
printDetails(robert);

// We don't even need a variable
printDetails({
  name: "Lil' Bobby",
  age: 6,
});
