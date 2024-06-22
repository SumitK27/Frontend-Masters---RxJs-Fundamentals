# **RxJs Fundamentals** <!-- omit in toc -->

- [**Observables**](#observables)
  - [**Operators**](#operators)
    - [**Of**](#of)
    - [**From**](#from)
    - [**FromEvent**](#fromevent)
    - [**BindCallback**](#bindcallback)
    - [**FromFetch**](#fromfetch)
  - [**Methods**](#methods)
    - [**Subscribe**](#subscribe)
    - [**UnSubscribe**](#unsubscribe)


## **Observables**

- What is an Observable?
  - Represents collection or stream of values that arrive over time
  - Can be synchronous or asynchronous

- Why use Observables?
  - Handle asynchronous operations
  - Handle multiple values
  - Handle errors
  - Handle completion

### **Operators**
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

#### **FromFetch**

- Used to create observable from fetch API.
- It takes one argument: URL.

```typescript
import { fromFetch } from 'rxjs';

const observable = fromFetch('https://jsonplaceholder.typicode.com/posts');
observable.subscribe((response) => console.log(response));
```

[⬆ back to top](#)

### **Methods**

#### **Subscribe**
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
#### **UnSubscribe**

- Used to stop the observable from emitting values.
- It is important to unsubscribe from the observable to avoid memory leaks.

```typescript
const subscription = observable.subscribe((value) => console.log(value));
subscription.unsubscribe();
```

[⬆ back to top](#)
