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
  - [**Utility Operators**](#utility-operators)
    - [**Tap**](#tap)
    - [**Delay**](#delay)
  - [**Join Creation**](#join-creation)
    - [**Merge**](#merge)
    - [**Concat**](#concat)
    - [**Race**](#race)
    - [**ForkJoin**](#forkjoin)
  - [**Miscellaneous**](#miscellaneous)
    - [**FromFetch**](#fromfetch)
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
```

#### **From**

- Used to create observable from array, promise, iterable, etc.

```typescript
import { from } from 'rxjs';

const observable = from([1, 2, 3, 4, 5]);
observable.subscribe((value) => console.log(value));
```

#### **FromEvent**

- Used to create observable from DOM events.
- It takes two arguments: target and event name.

```typescript
import { fromEvent } from 'rxjs';

const button = document.querySelector('button');
const observable = fromEvent(button, 'click');
observable.subscribe((event) => console.log(event));
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
```

#### **Interval**

- Used to create observable that emits values in sequence at every specified interval.
- It takes one argument: interval in milliseconds.

```typescript
import { interval } from 'rxjs';

const observable = interval(1000); // Emits value every second
observable.subscribe((value) => console.log(value));
```

#### **Timer**

- Used to create observable that emits values in sequence at every specified interval.
- It takes two arguments: initial delay and interval in milliseconds.

```typescript
import { timer } from 'rxjs';

const observable = timer(1000, 5000); // Emits value after 1 second and then every 5 seconds
observable.subscribe((value) => console.log(value));
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
```

#### **Skip**

- Used to skip specified number of values from the observable.
- It takes one argument: number of values to skip.

```typescript
import { of } from 'rxjs';
import { skip } from 'rxjs/operators';

const observable = from([1, 2, 3, 4, 5]).pipe(skip(2));
observable.subscribe((value) => console.log(value));
```

#### **TakeWhile**

- Used to take values from the observable until the condition is met.
- It takes one argument: condition function.

```typescript
import { of } from 'rxjs';

const observable = from([1, 2, 3, 4, 5]).pipe(takeWhile((value) => value < 4));
observable.subscribe((value) => console.log(value));
```

#### **SkipWhile**

- Used to skip values from the observable until the condition is met.
- It takes one argument: condition function.

```typescript
import { of } from 'rxjs';

const observable = from([1, 2, 3, 4, 5]).pipe(skipWhile((value) => value < 3));
observable.subscribe((value) => console.log(value));
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
```

#### **Filter**

- Used to filter values from the observable based on the condition.
- It takes one argument: condition function.

```typescript
import { of } from 'rxjs';
import { filter } from 'rxjs/operators';

const observable = from([1, 2, 3, 4, 5]).pipe(filter((value) => value % 2 === 0));
observable.subscribe((value) => console.log(value));
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
```

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
```

#### **Delay**

- Used to delay the values emitted by the observable.
- It takes one argument: time in milliseconds.

```typescript
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

const observable = from([1, 2, 3, 4, 5]).pipe(delay(1000));
observable.subscribe((value) => console.log(value));
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
```

### **Miscellaneous**

#### **FromFetch**

- Used to create observable from fetch API.
- It takes one argument: URL.

```typescript
import { fromFetch } from 'rxjs';

const observable = fromFetch('https://jsonplaceholder.typicode.com/posts');
observable.subscribe((response) => console.log(response));
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