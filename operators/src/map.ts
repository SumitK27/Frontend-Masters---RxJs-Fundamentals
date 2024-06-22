import { from, map, of, take } from "rxjs";
import { fibonacci } from "./util";

console.log("=====================================");
console.log("Map Operator");
console.log("=====================================");

const source = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
source.pipe(map((value) => value * 2)).subscribe(console.log);

console.log("=====================================");
console.log("Fibonacci");
console.log("=====================================");

const fibonacciObservable = from(fibonacci());
fibonacciObservable
  .pipe(
    map((value) => value * 2),
    take(10)
  )
  .subscribe((value) => console.log(value));
