import { from, of, take } from "rxjs";
import { fibonacci } from "./util";

console.log("=====================================");
console.log("Take Operator");
console.log("=====================================");

const source = of(1, 2, 3, 4, 5);
source.pipe(take(3)).subscribe(console.log);

console.log("=====================================");
console.log("Fibonacci");
console.log("=====================================");
const fibonacciObservable = from(fibonacci());
fibonacciObservable.pipe(take(10)).subscribe((value) => console.log(value));
