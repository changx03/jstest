const a = [1, 2, 3];
const b = [7,6, ...a];

const sort = (...args) => args.sort();

console.log(sort(...b));
