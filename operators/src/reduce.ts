import { from, of, reduce, take } from "rxjs";
import { fibonacci } from "./util";

console.log("=====================================");
console.log("Reduce Operator");
console.log("=====================================");

const source = of(1, 2, 3, 4, 5);
source.pipe(reduce((acc, value) => acc + value)).subscribe(console.log);

console.log("=====================================");
console.log("Fibonacci");
console.log("=====================================");

const fibonacciObservable = from(fibonacci());
fibonacciObservable
  .pipe(
    take(10),
    reduce((acc, value) => acc + value, 0)
  )
  .subscribe((value) => console.log(value));
