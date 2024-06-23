import { of, interval, exhaustMap, take, map } from "rxjs";

console.log("======================================");
console.log("ExhaustMap Operator");
console.log("======================================");

const observable1 = interval(1000).pipe(take(6));
const observable2 = interval(500).pipe(take(3));

//* The exhaustMap operator is similar to the mergeMap operator, but it ignores all the values from the source observable until the inner observable completes.
observable1
  .pipe(
    exhaustMap((first) =>
      observable2.pipe(map((second) => `First: ${first}, Second: ${second}`))
    )
  )
  .subscribe((value) => console.log(value));

//? Output:
// First: 0, Second: 0
// First: 0, Second: 1
// First: 0, Second: 2
// First: 2, Second: 0
// First: 2, Second: 1
// First: 2, Second: 2
// First: 4, Second: 0
// First: 4, Second: 1
// First: 4, Second: 2

//? Explanation:
//! At time 0, observable1 emits its first value (0). observable2 starts emitting every 500ms as mapped by exhaustMap.
//* observable2 emits 3 values (0, 1, 2) before it completes, which are combined with the current observable1 value (0) and logged.
//! At time 1000ms, observable1 would emit its second value (1), but observable2 is still active from the first emission, so this value is ignored.
//* At time 2000ms, observable1 emits its third value (2). Since observable2 from the first emission has completed, a new observable2 sequence starts, emitting 3 values (0, 1, 2) combined with the current observable1 value (2) and logged.
//! This pattern repeats for the values 4 from observable1, as the values 1 and 3 from observable1 are ignored due to the timing of observable2's emissions.
