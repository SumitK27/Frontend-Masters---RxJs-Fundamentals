import { of } from "rxjs";
import { map, retryWhen, retry, delay } from "rxjs/operators";

console.log("===============================");
console.log("RetryWhen Operator");
console.log("===============================");

const observable = of(1, 2, 3, 4, 5).pipe(
  map((value) => {
    if (value === 3) {
      throw new Error("Error occurred");
    }
    return value;
  }),
  retryWhen((errors) => errors.pipe(delay(1000)))
  // New way to retry with delay (as a condition to retry)
  // retry({ delay: 1000 })
);
observable.subscribe({
  next: (value) => console.log(value),
  error: (error) => console.error(error.message),
});
