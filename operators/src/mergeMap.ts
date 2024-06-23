import { of, interval, mergeMap, map, take } from "rxjs";

console.log("======================================");
console.log("MergeMap Operator");
console.log("======================================");

const observable1 = interval(1000).pipe(take(3));
const observable2 = interval(500).pipe(take(6));

observable1
  .pipe(
    mergeMap((first) =>
      observable2.pipe(map((second) => `First: ${first}, Second: ${second}`))
    )
  )
  .subscribe((value) => console.log(value));

//? Output:
// First: 0, Second: 0
// First: 0, Second: 1
// First: 1, Second: 0
// First: 0, Second: 2
// First: 1, Second: 1
// First: 0, Second: 3
// First: 2, Second: 0
// First: 1, Second: 2
// First: 0, Second: 4
// First: 2, Second: 1
// First: 1, Second: 3
// First: 0, Second: 5
// First: 2, Second: 2
// First: 1, Second: 4
// First: 2, Second: 3
// First: 1, Second: 5
// First: 2, Second: 4
// First: 2, Second: 5
