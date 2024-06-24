import { of, shareReplay } from "rxjs";

console.log("===============================");
console.log("ShareReplay operator");
console.log("===============================");

const source$ = of(1, 2, 3, 4, 5);
const example$ = source$.pipe(shareReplay(2));
example$.subscribe(console.log);
example$.subscribe(console.log);

//? Output
// 1
// 2
// 3
// 4
// 5
// 4 // Last two values are cached
// 5 // Last two values are cached
