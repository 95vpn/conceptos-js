const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const filter = numbers.filter(n => n % 2 !== 0)
console.log(filter)
console.log(filter.map(n => n * 2))


const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const filter1 = numbers1.map(n => n % 2 === 0 ? false : n * 2)
console.log(filter1)
console.log(filter1.filter(Boolean))