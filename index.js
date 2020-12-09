const Promise = require('bluebird');
const coroutine = require('./coroutine');

function promise1() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('Promise 1');
            resolve('promise1 - 3ms');
        }, 3000);
    });
}

function promise2() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('Promise 2');
            resolve('promise2 - 2ms');
        }, 2000);
    });
}

function* gen() {
    const vP = yield Promise.all([
        promise1(),
        promise2()
    ]);
    // console.log(vP);
    return vP;
}

coroutine(gen);
