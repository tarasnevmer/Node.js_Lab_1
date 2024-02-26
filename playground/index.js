const lodash = require('lodash');

// 1. Метод map для створення нового масиву на основі вихідного масиву
console.log('1 метод map')
const nums = [1, 2, 3, 4];
const editNums = lodash.map(nums, (num) => num - 1);
console.log('Nums: ',nums,'\nEdited nums: ', editNums);

// 2. Метод sortBy для сортування масиву
console.log('\n2 метод sortBy')
const arr = [10, 1242, 34, -234,];
const sortedArr = lodash.sortBy(arr);
console.log(`Array:`, arr , `\nSorted array: `, sortedArr);

// 3. Метод find для пошуку елемента в масиві
console.log('\n3 метод find')
const persons = [
    {id: 1, firstName: 'Taras', lastName: 'Nevmerzhytskyi'},
    {id: 2, firstName: 'Dima', lastName: 'Stadnik'},
    {id: 3, firstName: 'Andrey', lastName: 'Rydui'}
];

const findPerson = lodash.find(persons, {firstName: 'Dima'});
console.log('Person found: ', findPerson);

// 4. Метод reverse для обертання масиву
console.log('\n4 метод reverse')
const arr2 = [1, 2, 3, 4, 5]
const reversedArr = lodash.reverse(arr2);
console.log('Reversed Array: ', reversedArr)

// 5. Метод isEqual для порівняння значень
console.log('\n5 метод isEqual')
const a = 1;
const b = 2;
const c = 1;
console.log('Are objects equal: ', lodash.isEqual(a, c));