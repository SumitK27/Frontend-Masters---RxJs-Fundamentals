import { of, first } from "rxjs";

console.log("===============================");
console.log("First operator");
console.log("===============================");

const source$ = of(1, 2, 3, 4, 5);
const example$ = source$.pipe(first());
example$.subscribe(console.log);

//? Output
// 1
