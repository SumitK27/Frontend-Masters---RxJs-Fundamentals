import { forkJoin, interval, take, map } from "rxjs";

console.log("===============================");
console.log("ForkJoin Operator");
console.log("===============================");

const labelWith = (stream: string) => (value: any) => ({ stream, value });
const observable1 = interval(1000).pipe(
  take(3),
  map(labelWith("Observable 1"))
);
const observable2 = interval(500).pipe(take(6), map(labelWith("Observable 2")));

const observable = forkJoin([observable1, observable2]);
observable.subscribe(([result1, result2]) => {
  console.table([
    { [result1.stream]: result1.value, [result2.stream]: result2.value },
  ]);
});
