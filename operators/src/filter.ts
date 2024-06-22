import { filter, from, of, take } from "rxjs";
import { fibonacci } from "./util";

console.log("=====================================");
console.log("Filter Operator");
console.log("=====================================");

const source = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
source.pipe(filter((value) => value % 2 === 0)).subscribe(console.log);

console.log("=====================================");
console.log("Fibonacci");
console.log("=====================================");

const fibonacciObservable = from(fibonacci());
fibonacciObservable
  .pipe(
    take(10), // Order matters here
    filter((value) => value % 2 === 0 && value < 100)
  )
  .subscribe((value) => console.log(value));
