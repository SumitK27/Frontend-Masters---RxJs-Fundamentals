import { of } from "rxjs";
import { delay } from "rxjs/operators";

const source = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
const example = source.pipe(delay(1000));
example.subscribe(console.log);
