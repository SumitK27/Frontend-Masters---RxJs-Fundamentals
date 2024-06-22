import { of } from "rxjs";
import { debounceTime } from "rxjs/operators";

const source = of(1, 2, 3, 4, 5, 6);
const example = source.pipe(debounceTime(1000));
example.subscribe(console.log);
