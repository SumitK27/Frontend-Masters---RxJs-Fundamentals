import { interval, skipUntil, take } from "rxjs";

console.log("====================================");
console.info("Take until operator");
console.log("====================================");

const startTime = Date.now();

const timer$ = interval(2000);

interval(1000)
  .pipe(skipUntil(timer$), take(5))
  .subscribe(() => console.log(`Time elapsed: ${Date.now() - startTime}ms`));
