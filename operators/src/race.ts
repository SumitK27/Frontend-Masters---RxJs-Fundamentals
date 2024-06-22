import { race, interval, take, map } from "rxjs";

console.log("===============================");
console.log("Race Operator");
console.log("===============================");

const labelWith = (stream: string) => (value: any) => ({ stream, value });
const observable1 = interval(1000).pipe(
  take(3),
  map(labelWith("Observable 1"))
);
const observable2 = interval(500).pipe(take(6), map(labelWith("Observable 2")));

const observable = race(observable1, observable2);
observable.subscribe((value) =>
  console.log(`${value?.stream}: ${value?.value}`)
);
