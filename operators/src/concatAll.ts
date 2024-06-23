import { of } from "rxjs";
import { concatAll } from "rxjs/operators";

console.log("======================================");
console.log("ConcatAll Operator");
console.log("======================================");

const observable = of(of(1, 2, 3), of(4, 5, 6)).pipe(concatAll());
observable.subscribe((value) => console.log(value));
