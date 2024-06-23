import { of } from "rxjs";
import { map, retry } from "rxjs/operators";

console.log("===============================");
console.log("Retry Operator");
console.log("===============================");

const observable = of(1, 2, 3, 4, 5).pipe(
  map((value) => {
    if (value === 3) {
      throw new Error("Error occurred");
    }
    return value;
  }),
  retry(2)
);
observable.subscribe({
  next: (value) => console.log(value),
  error: (error) => console.error(error.message),
});
