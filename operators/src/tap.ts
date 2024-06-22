import { from, of, tap, take } from "rxjs";
import { fibonacci } from "./util";

console.log("=====================================");
console.log("Tap Operator");
console.log("=====================================");

const source = of(1, 2, 3, 4, 5);
source.pipe(tap(console.log)).subscribe();

console.log("=====================================");
console.log("Fibonacci");
console.log("=====================================");
const fibonacciObservable = from(fibonacci());
fibonacciObservable.pipe(take(10), tap(console.log)).subscribe();
