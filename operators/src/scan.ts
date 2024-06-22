import { from, of, scan, take } from "rxjs";
import { fibonacci } from "./util";

console.log("=====================================");
console.log("Scan Operator");
console.log("=====================================");

const source = of(1, 2, 3, 4, 5);
source.pipe(scan((acc, value) => acc + value)).subscribe(console.log);

console.log("=====================================");
console.log("Fibonacci");
console.log("=====================================");

const fibonacciObservable = from(fibonacci());
fibonacciObservable
  .pipe(
    take(10),
    scan((acc, value) => acc + value, 0)
  )
  .subscribe((value) => console.log(value));
