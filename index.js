const coroutine = require('./coroutine');

function promise1() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('promise1 - 3ms');
        }, 3000);
    });
}

function promise2() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('promise2 - 2ms');
        }, 2000);
    });
}

function* gen() {
    const vP = yield Promise.all([
        promise1(),
        promise2()
    ]);
    console.log(vP);
}

coroutine(gen);