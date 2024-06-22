import { of } from "rxjs";
import { throttleTime } from "rxjs/operators";

const source = of(1, 2, 3, 4, 5, 6);
const example = source.pipe(throttleTime(1000));
example.subscribe(console.log);
