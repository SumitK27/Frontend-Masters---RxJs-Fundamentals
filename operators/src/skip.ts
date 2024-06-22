import { from, of, skip, take } from "rxjs";
import { fibonacci } from "./util";

console.log("=====================================");
console.log("Skip Operator");
console.log("=====================================");

const source = of(1, 2, 3, 4, 5);
source.pipe(skip(3)).subscribe(console.log);

console.log("=====================================");
console.log("Fibonacci");
console.log("=====================================");
const fibonacciObservable = from(fibonacci());
fibonacciObservable
  .pipe(skip(10), take(5))
  .subscribe((value) => console.log(value));
