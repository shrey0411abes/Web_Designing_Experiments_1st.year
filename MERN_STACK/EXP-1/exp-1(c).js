console.log('1. Start');

process.nextTick(() => console.log('2. nextTick'));

setTimeout(() => console.log('3. setTimeout') , 100000 );

setImmediate(() => console.log('4. setImmediate'));

console.log('5. End');