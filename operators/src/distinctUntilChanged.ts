import { of, distinctUntilChanged } from "rxjs";

console.log("===============================");
console.log("DistinctUntilChanged Operator");
console.log("===============================");

const observable = of(1, 1, 2, 2, 3, 3, 4, 4, 5, 5).pipe(
  distinctUntilChanged()
);
observable.subscribe({
  next: (value) => console.log(value),
});
// Output:
// 1
// 2
// 3
// 4
// 5
