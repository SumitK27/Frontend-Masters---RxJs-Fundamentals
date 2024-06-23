import { map, of, pluck } from "rxjs";

console.log("===============================");
console.log("Pluck Operator");
console.log("===============================");

const observable = of(
  {
    name: "John",
    age: 30,
    job: { title: "Developer", language: "JavaScript" },
  },
  { name: "Doe", age: 25, job: { title: "Developer", language: "TypeScript" } },
  { name: "Smith", age: 35, job: { title: "Tester", language: "Python" } }
).pipe(
  // Simple pluck
  pluck("name")
  // Nested level pluck
  // pluck("job", "title")

  //* New way to pluck is with map operator
  // map(value => value?.name)
  // map(value => value?.job?.title)
);
observable.subscribe({
  next: (value) => console.log(value),
});

//? Output:
// John
// Doe
// Smith
