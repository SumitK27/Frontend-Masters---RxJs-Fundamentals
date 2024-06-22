import { of, from, skipWhile, take } from "rxjs";
import { fibonacci } from "./util";

console.log("=====================================");
console.log("SkipWhile Operator");
console.log("=====================================");
const source = of(1, 2, 3, 4, 5);
source.pipe(skipWhile((value) => value < 4)).subscribe(console.log);

console.log("=====================================");
console.log("Fibonacci");
console.log("=====================================");

const fibonacciObservable = from(fibonacci());
fibonacciObservable
  .pipe(
    skipWhile((value) => value < 100),
    take(5)
  )
  .subscribe((value) => console.log(value));
