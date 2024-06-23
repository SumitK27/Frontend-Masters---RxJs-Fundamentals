# **RxJs Fundamentals** <!-- omit in toc -->

- [**Observables**](#observables)
- [**Operators**](#operators)
  - [**Creation Operators**](#creation-operators)
    - [**Of**](#of)
    - [**From**](#from)
    - [**FromEvent**](#fromevent)
    - [**BindCallback**](#bindcallback)
    - [**Interval**](#interval)
    - [**Timer**](#timer)
  - [**Filtering Operators**](#filtering-operators)
    - [**Take**](#take)
    - [**Skip**](#skip)
    - [**TakeWhile**](#takewhile)
    - [**SkipWhile**](#skipwhile)
    - [**TakeUntil**](#takeuntil)
    - [**SkipUntil**](#skipuntil)
    - [**Filter**](#filter)
    - [**ThrottleTime**](#throttletime)
    - [**DebounceTime**](#debouncetime)
  - [**Mathematical and Aggregate Operators**](#mathematical-and-aggregate-operators)
    - [**Reduce**](#reduce)
  - [**Transformation Operators**](#transformation-operators)
    - [**Map**](#map)
    - [**MapTo**](#mapto)
    - [**Scan**](#scan)
    - [**MergeMap**](#mergemap)
    - [**ConcatMap**](#concatmap)
    - [**SwitchMap**](#switchmap)
    - [**ExhaustMap**](#exhaustmap)
  - [**Utility Operators**](#utility-operators)
    - [**Tap**](#tap)
    - [**Delay**](#delay)
  - [**Join Creation**](#join-creation)
    - [**Merge**](#merge)
    - [**Concat**](#concat)
    - [**Race**](#race)
    - [**ForkJoin**](#forkjoin)
  - [**Join Operators**](#join-operators)
    - [**MergeAll**](#mergeall)
    - [**ConcatAll**](#concatall)
    - [**CombineLatestAll**](#combinelatestall)
    - [**CombineLatestWith**](#combinelatestwith)
  - [**Miscellaneous**](#miscellaneous)
    - [**FromFetch**](#fromfetch)
    - [**NEVER**](#never)
    - [**EMPTY**](#empty)
- [**Methods**](#methods)
  - [**Subscribe**](#subscribe)
  - [**UnSubscribe**](#unsubscribe)
  - [**Pipe**](#pipe)


## **Observables**

- What is an Observable?
  - Represents collection or stream of values that arrive over time
  - Can be synchronous or asynchronous

- Why use Observables?
  - Handle asynchronous operations
  - Handle multiple values
  - Handle errors
  - Handle completion

## **Operators**

- Operators are functions that can be used to create, modify, or filter observables.
- There are 100+ operators available in RxJS.
- Some of the commonly used operators are:
  `of`, `from`, `fromEvent`, `bindCallback`, `fromFetch`, `interval`, `timer`, `take`, `skip`, `takeWhile`, `skipWhile`, `filter`, `map`, `mapTo`, `reduce`, `scan`, `tap`, etc.
- Operators can be used with pipe method.
- Operators can be chained together to create complex logic.
- Operators can be categorized into creation, transformation, filtering, combination, multicasting, error handling, utility, conditional, mathematical.
- More operators can be found in the [official documentation](https://rxjs.dev/guide/operators).


### **Creation Operators**

#### **Of**

- Used to create observable from one or more values.
- Used for primitive values (numbers, strings, boolean, null, undefined, etc.) or objects.

```typescript
import { of } from 'rxjs';

const observable = of(1, 2, 3, 4, 5);
observable.subscribe((value) => console.log(value));
// Output: 1, 2, 3, 4, 5
```

#### **From**

- Used to create observable from array, promise, iterable, etc.

```typescript
import { from } from 'rxjs';

const observable = from([1, 2, 3, 4, 5]);
observable.subscribe((value) => console.log(value));
// Output: 1, 2, 3, 4, 5
```

#### **FromEvent**

- Used to create observable from DOM events.
- It takes two arguments: target and event name.

```typescript
import { fromEvent } from 'rxjs';

const button = document.querySelector('button');
const observable = fromEvent(button, 'click');
observable.subscribe((event) => console.log(event));
// Output: MouseEvent {isTrusted: true, screenX: 0, screenY: 0, clientX: 0, clientY: 0, …}
```

#### **BindCallback**

- Used to create observable from callback function.
- It takes three arguments: callback function, context, and arguments.

```typescript
import { bindCallback } from 'rxjs';

const callback = (value, callback) => {
  callback(value);
};

const observable = bindCallback(callback);
observable('Hello', (value) => console.log(value));
// Output: Hello
```

#### **Interval**

- Used to create observable that emits values in sequence at every specified interval.
- It takes one argument: interval in milliseconds.

```typescript
import { interval } from 'rxjs';

const observable = interval(1000); // Emits value every second
observable.subscribe((value) => console.log(value));
// Output: 0, 1, 2, 3, 4, 5, ...
```

#### **Timer**

- Used to create observable that emits values in sequence at every specified interval.
- It takes two arguments: initial delay and interval in milliseconds.

```typescript
import { timer } from 'rxjs';

const observable = timer(1000, 5000); // Emits value after 1 second and then every 5 seconds
observable.subscribe((value) => console.log(value));
// Output: 0, 1, 2, 3, 4, 5, ...
```

### **Filtering Operators**

#### **Take**

- Used to take specified number of values from the observable.
- It takes one argument: number of values to take.

```typescript
import { of } from 'rxjs';
import { take } from 'rxjs/operators';

const observable = from([1, 2, 3, 4, 5]).pipe(take(3));
observable.subscribe((value) => console.log(value));
// Output: 1, 2, 3
```

#### **Skip**

- Used to skip specified number of values from the observable.
- It takes one argument: number of values to skip.

```typescript
import { of } from 'rxjs';
import { skip } from 'rxjs/operators';

const observable = from([1, 2, 3, 4, 5]).pipe(skip(2));
observable.subscribe((value) => console.log(value));
// Output: 3, 4, 5
```

#### **TakeWhile**

- Used to take values from the observable until the condition is met.
- It takes one argument: condition function.

```typescript
import { of } from 'rxjs';

const observable = from([1, 2, 3, 4, 5]).pipe(takeWhile((value) => value < 4));
observable.subscribe((value) => console.log(value));
// Output: 1, 2, 3
```

#### **SkipWhile**

- Used to skip values from the observable until the condition is met.
- It takes one argument: condition function.

```typescript
import { of } from 'rxjs';

const observable = from([1, 2, 3, 4, 5]).pipe(skipWhile((value) => value < 3));
observable.subscribe((value) => console.log(value));
// Output: 3, 4, 5
```

#### **TakeUntil**

- Used to take values from the observable until the notifier emits a value.
- It takes one argument: notifier observable.

```typescript
import { of, interval } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

const notifier = interval(5000);
const observable = interval(1000).pipe(takeUntil(notifier));
observable.subscribe((value) => console.log(value));
// Output: 0, 1, 2, 3, 4
```

#### **SkipUntil**

- Used to skip values from the observable until the notifier emits a value.
- It takes one argument: notifier observable.

```typescript
import { of, interval } from 'rxjs';
import { skipUntil } from 'rxjs/operators';

const notifier = interval(5000);
const observable = interval(1000).pipe(skipUntil(notifier));
observable.subscribe((value) => console.log(value));
// Output: 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, ...
```

#### **Filter**

- Used to filter values from the observable based on the condition.
- It takes one argument: condition function.

```typescript
import { of } from 'rxjs';
import { filter } from 'rxjs/operators';

const observable = from([1, 2, 3, 4, 5]).pipe(filter((value) => value % 2 === 0));
observable.subscribe((value) => console.log(value));
// Output: 2, 4
```

#### **ThrottleTime**

- Used to throttle values from the observable based on the time interval.
- It emits the first value and then ignores the values for the specified time interval.
- It takes one argument: time in milliseconds.

```typescript
import { of } from 'rxjs';
import { throttleTime } from 'rxjs/operators';

const observable = from([1, 2, 3, 4, 5]).pipe(throttleTime(1000));
observable.subscribe((value) => console.log(value));
// Output: 1 (all other values are ignored for 1 second if they arrive within 1 second)
```

#### **DebounceTime**

- Used to debounce values from the observable based on the time interval.
- It emits the last value after the specified time interval.
- It takes one argument: time in milliseconds.

```typescript
import { of } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

const observable = from([1, 2, 3, 4, 5]).pipe(debounceTime(1000));
observable.subscribe((value) => console.log(value));
// Output: 5 (all other values are ignored for 1 second and the last value is emitted)
```

[⬆ back to top](#)

### **Mathematical and Aggregate Operators**

#### **Reduce**

- Used to reduce values from the observable.
- Only emits the final value.
- It takes two arguments: accumulator function and initial value.

```typescript
import { of } from 'rxjs';
import { reduce } from 'rxjs/operators';

const observable = from([1, 2, 3, 4, 5]).pipe(reduce((acc, value) => acc + value, 0));
observable.subscribe((value) => console.log(value));
// Output: 15 (1 + 2 + 3 + 4 + 5 = 15)
```

### **Transformation Operators**

#### **Map**

- Used to transform values from the observable.
- It takes one argument: transformation function.

```typescript
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

const observable = from([1, 2, 3, 4, 5]).pipe(map((value) => value * 2));
observable.subscribe((value) => console.log(value));
// Output: 2, 4, 6, 8, 10
```

#### **MapTo**

- Used to transform values from the observable to a constant value.
- Deprecated, use map instead.
- It takes one argument: constant value.

```typescript
import { of } from 'rxjs';
import { mapTo } from 'rxjs/operators';

const observable = from([1, 2, 3, 4, 5]).pipe(mapTo(10));
observable.subscribe((value) => console.log(value));
// Output: 10, 10, 10, 10, 10
```

#### **Scan**

- Used to reduce values from the observable.
- Emits the value at each step.
- It takes two arguments: accumulator function and initial value.

```typescript
import { of } from 'rxjs';
import { scan } from 'rxjs/operators';

const observable = from([1, 2, 3, 4, 5]).pipe(scan((acc, value) => acc + value, 0));
observable.subscribe((value) => console.log(value));
// Output: 1, 3, 6, 10, 15
```

#### **MergeMap**

- Used to merge multiple observables into a single observable.
- It takes one argument: projection function.

```typescript
import { of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

const observable = from([1, 2, 3, 4, 5]).pipe(mergeMap((value) => of(value * 2)));
observable.subscribe((value) => console.log(value));
// Output: 2, 4, 6, 8, 10
```

#### **ConcatMap**

- Used to concatenate multiple observables into a single observable.
- It takes one argument: projection function.

```typescript
import { concatMap, from, interval, map, take } from 'rxjs';

const observable = from(['a', 'b', 'c', 'd']).pipe(
  concatMap(
    letter => 
    interval(1000)
      .pipe(
        map(value => letter + ' ' + value),
        take(3)
      )
  ),
);
observable.subscribe((value) => console.log(value));
// Output: a 0, a 1, a 2, b 0, b 1, b 2, c 0, c 1, c 2, d 0, d 1, d 2
```

#### **SwitchMap**

- Used to switch to the latest observable.
- Discards the previous observable and subscribes to the latest observable.
- It takes one argument: projection function.

```typescript
import { switchMap, from, interval, map, take } from 'rxjs';

const observable = from(['a', 'b', 'c', 'd']).pipe(
  switchMap(
    letter => 
    interval(1000)
      .pipe(
        map(value => letter + ' ' + value),
        take(3)
      )
  ),
);
observable.subscribe((value) => console.log(value));
// Output: a 0, a 1, a 2, b 0, b 1, b 2, c 0, c 1, c 2, d 0, d 1, d 2
```

#### **ExhaustMap**

- Used to ignore new values until the current observable completes.
- Ignores new values until the current observable completes.
- It takes one argument: projection function.

```typescript
import { exhaustMap, from, interval, map, take } from 'rxjs';

const observable = from(['a', 'b', 'c', 'd']).pipe(
  exhaustMap(
    letter => 
    interval(1000)
      .pipe(
        map(value => letter + ' ' + value),
        take(3)
      )
  ),
);
observable.subscribe((value) => console.log(value));
// Output: a 0, a 1, a 2
```

[⬆ back to top](#)

### **Utility Operators**

#### **Tap**

- Used to perform side effects on the observable.
- Can be used for debugging, logging, DOM manipulation, etc.
- Used to perform actions without affecting the values emitted by the observable.
- Use case: Suppose you want to log the values emitted by the observable without affecting the values.
- It takes one argument: side effect function.

```typescript
import { of } from 'rxjs';
import { tap } from 'rxjs/operators';

const observable = from([1, 2, 3, 4, 5]).pipe(tap((value) => console.log(value)));
observable.subscribe((value) => console.log(value));
// Output: 1, 1, 2, 2, 3, 3, 4, 4, 5, 5
```

#### **Delay**

- Used to delay the values emitted by the observable.
- It takes one argument: time in milliseconds.

```typescript
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

const observable = from([1, 2, 3, 4, 5]).pipe(delay(1000));
observable.subscribe((value) => console.log(value));
// Output: 1, 2, 3, 4, 5 (after 1 second)
```

### **Join Creation**

#### **Merge**

- Used to merge multiple observables into a single observable.
- Runs all observables concurrently and emits values in the order they are emitted.
- It takes one or more observables as arguments.

```typescript
import { merge, interval, take } from 'rxjs';

const observable1 = interval(1000).pipe(take(3));
const observable2 = interval(500).pipe(take(6));

const observable = merge(observable1, observable2);
observable.subscribe((value) => console.log(value));
// Output: 0, 0, 1, 1, 2, 2, 3, 4, 5
```

#### **Concat**

- Used to concatenate multiple observables into a single observable.
- Runs all observables sequentially and emits values in the order they are emitted.
- It takes one or more observables as arguments.

```typescript
import { concat, interval, take } from 'rxjs';

const observable1 = interval(1000).pipe(take(3));
const observable2 = interval(500).pipe(take(6));

const observable = concat(observable1, observable2);
observable.subscribe((value) => console.log(value));
// Output: 0, 1, 2, 0, 1, 2, 3, 4, 5
```

#### **Race**

- Used to combine multiple observables and emit the first value emitted by any observable.
- It takes one or more observables as arguments.

```typescript
import { race, interval, take } from 'rxjs';

const observable1 = interval(1000).pipe(take(3));
const observable2 = interval(500).pipe(take(6));

const observable = race(observable1, observable2);
observable.subscribe((value) => console.log(value));
// Output: 0, 1, 2, 3, 4, 5
```

#### **ForkJoin**

- Used to combine multiple observables and emit the last value emitted by all observables.
- It takes one or more observables as arguments.

```typescript
import { forkJoin, of } from 'rxjs';

const observable1 = of(1, 2, 3);
const observable2 = of(4, 5, 6);

const observable = forkJoin(observable1, observable2);
observable.subscribe((value) => console.log(value));
// Output: [3, 6]
```

### **Join Operators**

#### **MergeAll**

- Used to merge multiple observables into a single observable.
- Emits values in the order they are emitted by the observables.
- It takes no arguments.

```typescript
import { of } from 'rxjs';
import { mergeAll, map } from 'rxjs/operators';

const observable = of(of(1, 2, 3), of(4, 5, 6)).pipe(mergeAll());
observable.subscribe((value) => console.log(value));
// Output: 1, 2, 3, 4, 5, 6
```

#### **ConcatAll**

- Used to concatenate multiple observables into a single observable.
- Emits values by concatenating the observables in the order they are provided.
- It takes no arguments.

```typescript
import { of } from 'rxjs';
import { concatAll, map } from 'rxjs/operators';

const observable = of(of(1, 2, 3), of(4, 5, 6)).pipe(concatAll());
observable.subscribe((value) => console.log(value));
// Output: 1, 2, 3, 4, 5, 6
```

#### **CombineLatestAll**

- Used to combine multiple observables into a single observable.
- Waits till all observables emit at least one value and then emits the latest values.
- The number of values emitted is equal to the number of observables.
- It takes no arguments.

```typescript
import { of } from 'rxjs';
import { combineLatestAll, interval, map } from 'rxjs/operators';

const observable = of(interval(1000).pipe(take(3)), interval(500).pipe(take(6))).pipe(combineLatestAll());
observable.subscribe((value) => console.log(value));
// Output: [0, 0], [0, 1], [0, 2], [1, 2], [1, 3], [1, 4], [2, 4], [2, 5]
```

#### **CombineLatestWith**

- Used to combine multiple observables into a single observable.
- Waits till all observables emit at least one value and then emits when any observable emits a value.
- It takes one or more observables as arguments.

```typescript
import { combineLatestWith, interval, take } from 'rxjs';

const observable1 = interval(1000).pipe(take(3));
const observable2 = interval(500).pipe(take(6));

const observable = observable1.pipe(combineLatestWith(observable2));
observable.subscribe((value) => console.log(value));
// Output: [0, 0], [0, 1], [0, 2], [1, 2], [1, 3], [1, 4], [2, 4], [2, 5]
```

[⬆ back to top](#)

### **Miscellaneous**

#### **FromFetch**

- Used to create observable from fetch API.
- It takes one argument: URL.

```typescript
import { fromFetch } from 'rxjs';

const observable = fromFetch('https://jsonplaceholder.typicode.com/posts');
observable.subscribe((response) => console.log(response));
```

#### **NEVER**

- Used to create observable that never emits values.
- It is used for testing and debugging purposes.

```typescript
import { NEVER } from 'rxjs';

const observable = NEVER;
observable.subscribe((value) => console.log(value));
// Output: (no output)
```

#### **EMPTY**

- Used to create observable that completes without emitting values.
- It is used for testing and debugging purposes.

```typescript
import { EMPTY } from 'rxjs';

const observable = EMPTY;
observable.subscribe({
  next: (value) => console.log(value),
  complete: () => console.log('Completed')
});
// Output: Completed
```

[⬆ back to top](#)

## **Methods**

### **Subscribe**
  - Used to listen to the values emitted by the observable.
  - It takes three arguments: next, error, and complete.
  - `next` - runs when a new value is emitted.
  - `error` is also a complete state, so it is not necessary to provide complete if error is provided.
  - `complete` - runs when the observable completes.

```typescript
// Deprecated syntax
observable.subscribe(
  (value) => console.log("Runs when value is emitted", value),
  (error) => console.error("Runs when error occurs", error),
  () => console.log("Runs when observable completes")
);

// New syntax
observable.subscribe({
  next: (value) => console.log("Runs when value is emitted", value),
  error: (error) => console.error("Runs when error occurs", error),
  complete: () => console.log("Runs when observable completes")
});
```
### **UnSubscribe**

- Used to stop the observable from emitting values.
- It is important to unsubscribe from the observable to avoid memory leaks.

```typescript
const subscription = observable.subscribe((value) => console.log(value));
subscription.unsubscribe();
```

[⬆ back to top](#)

### **Pipe**

- Every observable has a pipe method that can be used to chain operators.
- You can either use pipe multiple times or chain operators in a single pipe method.

```typescript
import { of } from 'rxjs';
import { map, filter } from 'rxjs/operators';

const observable = of(1, 2, 3, 4, 5);
observable.pipe(
  map((value) => value * 2),
  filter((value) => value > 5)
).subscribe((value) => console.log(value));
```

[⬆ back to top](#)