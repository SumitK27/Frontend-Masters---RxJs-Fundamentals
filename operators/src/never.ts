import { NEVER } from "rxjs";

console.log("======================================");
console.log("NEVER Observable");
console.log("======================================");

const observable = NEVER;
observable.subscribe({
  next: (value) => console.log(value),
  error: (error) => console.log(error),
  complete: () => console.log("Completed"), // Never completes
});
