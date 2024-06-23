import { of, interval, combineLatestAll, take } from "rxjs";

console.log("======================================");
console.log("CombineLatestAll Operator");
console.log("======================================");

const observable = of(
  interval(1000).pipe(take(3)),
  interval(500).pipe(take(6))
).pipe(combineLatestAll());
observable.subscribe((value) => console.log(value));
