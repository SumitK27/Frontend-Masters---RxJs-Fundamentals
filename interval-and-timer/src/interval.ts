import { interval } from "rxjs";

console.log("====================================");
console.info("Interval example");
console.log("====================================");

const intervalObservable = interval(1000);
const subscription = intervalObservable.subscribe((value) =>
  console.log(value)
);

setTimeout(() => {
  subscription.unsubscribe();
}, 5000);
