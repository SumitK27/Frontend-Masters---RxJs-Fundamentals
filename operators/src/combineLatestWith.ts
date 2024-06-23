import { interval, combineLatestWith, map, take } from "rxjs";

console.log("======================================");
console.log("CombineLatestWith Operator");
console.log("======================================");

const firstObservable = interval(1000).pipe(take(3));
const secondObservable = interval(500).pipe(take(6));

firstObservable
  .pipe(
    combineLatestWith(secondObservable),
    map(([first, second]: [any, any]) => `First: ${first}, Second: ${second}`)
  )
  .subscribe((value) => console.log(value));
