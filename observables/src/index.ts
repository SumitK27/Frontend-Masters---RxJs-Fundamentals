import { Observable, from, of } from "rxjs";

console.log("====================================");
console.info("Observable 'of' example");
console.log("====================================");
// Create an observable that emits a sequence of numbers
const ofObservable = of(1, 2, 3, 4, 5);
ofObservable.subscribe((value) => console.log(value));

console.log("====================================");
console.info("Observable 'from' example");
console.log("====================================");
const forObservable = from([1, 2, 3, 4, 5]);
forObservable.subscribe((value) => console.log(value));

console.log("====================================");
console.info("Observable 'from' example with object");
console.log("====================================");
const errorObservable = from([
  1,
  2,
  new Error("Something went wrong!"),
  4,
  new Error("Another error!"),
]);
errorObservable.subscribe({
  next: (value) => console.log("Success:", value),
  error: (error) => console.error("Error:", error),
  complete: () => console.log("Completed"),
});

console.log("====================================");
console.info("Observable from generator function");
console.log("====================================");
function* generatorFunction() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
  return 6; // Not part of next() calls
}
const generatorObservable = from(generatorFunction());
generatorObservable.subscribe((value) => console.log(value));

// Set timeout used to show the output in order
setTimeout(() => {
  console.log("====================================");
  console.info("Observable from Promise");
  console.log("====================================");
  const promiseObservable = from(Promise.resolve("Hello World!"));
  promiseObservable.subscribe((value) => console.log(value));

  const promiseErrorObservable = from(Promise.reject("Something went wrong!"));
  promiseErrorObservable.subscribe({
    next: (value) => console.log("Success:", value),
    error: (error) => console.error("Error:", error),
    complete: () => console.log("Completed"),
  });
}, 1000);

console.log("====================================");
console.info("Observable from Custom logic");
console.log("====================================");
const customObservable = new Observable((subscriber) => {
  subscriber.next("A");
  subscriber.next("B");
  subscriber.next("C");
  subscriber.next("D");
  subscriber.complete();
  subscriber.next("E"); // This will not be called
});
customObservable.subscribe({
  next: (value) => console.log(value),
  complete: () => console.log("Completed"),
});
