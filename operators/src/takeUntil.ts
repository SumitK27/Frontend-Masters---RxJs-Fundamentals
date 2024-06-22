import { interval, takeUntil } from "rxjs";

console.log("====================================");
console.info("Take until operator");
console.log("====================================");

const startTime = Date.now();

const timer$ = interval(7000);

interval(1000)
  .pipe(takeUntil(timer$))
  .subscribe(() => console.log(`Time elapsed: ${Date.now() - startTime}ms`));
