import { timer } from "rxjs";

console.log("====================================");
console.info("Timer example");
console.log("====================================");

const timerObservable = timer(2000, 1000);
const subscription = timerObservable.subscribe((value) => console.log(value));

setTimeout(() => {
  console.log("Unsubscribing...");
  subscription.unsubscribe();
}, 5000);
