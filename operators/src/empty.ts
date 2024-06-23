import { EMPTY } from "rxjs";

console.log("======================================");
console.log("EMPTY Observable");
console.log("======================================");

const observable = EMPTY;
observable.subscribe({
  next: (value) => console.log(value), // No value will be emitted
  error: (error) => console.log(error),
  complete: () => console.log("Completed"),
});
