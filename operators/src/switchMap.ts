import { interval, switchMap, take, map } from "rxjs";

console.log("======================================");
console.log("SwitchMap Operator");
console.log("======================================");

const observable1 = interval(1000).pipe(take(6));
const observable2 = interval(500).pipe(take(3));

//* The switchMap operator is similar to the mergeMap operator, but it only emits values from the most recently projected Observable.
observable1
  .pipe(
    switchMap((first) =>
      observable2.pipe(map((second) => `First: ${first}, Second: ${second}`))
    )
  )
  .subscribe((value) => console.log(value));

//? Output:
// First: 0, Second: 0
// First: 1, Second: 0
// First: 2, Second: 0
// First: 3, Second: 0
// First: 4, Second: 1
// First: 5, Second: 2

//? Explanation:
//! observable1 emits its first value (0) at 1 second. At this point, switchMap subscribes to observable2.
//* observable2 starts emitting immediately after being subscribed to. It emits 0 at 0.5 seconds, but since it's subscribed to after 1 second due to observable1's first emission, the first value from observable2 is logged as First: 0, Second: 0.
//! Before observable2 can emit its second value (1), observable1 emits its second value (1) at 2 seconds, causing switchMap to unsubscribe from the current observable2 instance and subscribe to a new instance of observable2.
//* This pattern repeats: each time observable1 emits a new value, switchMap unsubscribes from the current observable2 and starts over with a new observable2. However, due to the timing, observable2 only manages to emit its first value (0) in response to each of observable1's emissions, until observable1's fourth emission.
//! By the time observable1 emits its fifth value (4), there's enough time for observable2 to emit its second value (1) before observable1 emits again. Similarly, observable2 manages to emit its third and final value (2) in response to observable1's final emission (5).
