console.log("1. Synchronous code: Program started.");

process.nextTick(() => {
    console.log("3. process.nextTick() executed.");
});

setTimeout(() => {
    console.log("4. setTimeout(0) executed.");
}, 0);

setImmediate(() => {
    console.log("5. setImmediate() executed.");
});

console.log("2. Synchronous code: Callbacks scheduled.");