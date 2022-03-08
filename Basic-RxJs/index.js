const { of } = require("rxjs");
const { map, filter } = require("rxjs/operators");

// - Pipe operators (map, tap, switchMap)


// - what will be logged to the console

of('Hello').pipe(
  map(x => `${x} World`),
  map(x => `${x} of`),
  map(x => `${x} RxJS`),
).subscribe(x => {
  console.log(x);
})

// - What will be logged to the console 
of(1, 2, 3).pipe(
  map(x => x + 1),
  filter(x => x > 2)
).subscribe(x => {
  console.log(x);
})

// - Subscription sequence 


