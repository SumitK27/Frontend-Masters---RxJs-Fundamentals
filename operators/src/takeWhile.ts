import { of, from, takeWhile } from "rxjs";
import { fibonacci } from "./util";

console.log("=====================================");
console.log("TakeWhile Operator");
console.log("=====================================");

const source = of(1, 2, 3, 4, 5);
source.pipe(takeWhile((value) => value < 4)).subscribe(console.log);

console.log("=====================================");
console.log("Fibonacci");
console.log("=====================================");

const fibonacciObservable = from(fibonacci());
fibonacciObservable
  .pipe(takeWhile((value) => value < 100))
  .subscribe((value) => console.log(value));
