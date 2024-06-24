import { of, share } from "rxjs";

console.log("===============================");
console.log("Share operator");
console.log("===============================");

const source$ = of(1, 2, 3, 4, 5);
const example$ = source$.pipe(share());
example$.subscribe(console.log);
example$.subscribe(console.log);

//? Output
// 1
// 2
// 3
// 4
// 5
// 1
// 2
// 3
// 4
// 5
