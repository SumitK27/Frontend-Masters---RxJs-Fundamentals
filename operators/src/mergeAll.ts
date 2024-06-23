import { of, interval, mergeAll, take, map } from "rxjs";

console.log("======================================");
console.log("MergeAll Operator");
console.log("======================================");

const observable = of(
  interval(1000).pipe(
    take(3),
    map((value) => `First: ${value}`)
  ),
  interval(500).pipe(
    take(6),
    map((value) => `Second: ${value}`)
  )
).pipe(mergeAll());
observable.subscribe((value) => console.log(value));
