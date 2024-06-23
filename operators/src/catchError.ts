import { of } from "rxjs";
import { catchError, map } from "rxjs/operators";

console.log("===============================");
console.log("CatchError Operator");
console.log("===============================");

const observable = of(1, 2, 3, 4, 5).pipe(
  map((value) => {
    if (value === 3) {
      throw new Error("Error occurred");
    }
    return value;
  }),
  catchError((error) => of("Error found: " + error.message))
);
observable.subscribe({
  next: (value) => console.log(value),
  error: (error) => console.error(error),
});
