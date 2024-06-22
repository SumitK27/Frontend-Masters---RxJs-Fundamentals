import { from, map, mapTo, of, take } from "rxjs";
import { fibonacci } from "./util";

console.log("=====================================");
console.log("MapTo Operator");
console.log("=====================================");

const source = of(1, 2, 3, 4, 5);
source.pipe(mapTo(10)).subscribe(console.log);

console.log("=====================================");
console.log("Fibonacci");
console.log("=====================================");

const fibonacciObservable = from(fibonacci());
fibonacciObservable
  .pipe(mapTo(10), take(3))
  // .pipe(map(() => 10)) // mapTo is deprecated, this is the new way
  .subscribe((value) => console.log(value));
