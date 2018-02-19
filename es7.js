// spread
const a = [1, 2, 3];
const b = [7,6, ...a];

// rest operator
const sort = (...args) => args.sort();
console.log(sort(...b));

const evenNum = (...args) => args.filter(i => i % 2 === 0);
console.log(evenNum(...b));


// destructuring
[, w, exclamation] = ['Hello', 'world', '!'];
console.log(w, exclamation);


const { name, age: myAge } = { name: 'Luke Skywalker', age: '29' };
console.log(name, myAge);


// JS copy object's pointer
// Deep copy example:
const person = {
  name: 'Max',
};
const person2 = person;
const nextPerson = Object.assign({}, person);
person.name = 'Maxx';
console.log('person2', person2.name);
console.log('nextPerson', nextPerson.name);
