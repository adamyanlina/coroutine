const Promise = require('bluebird');

function coroutine(generatorFN) {
    const i = generatorFN();
    i.next().value.then((vP) => {
        for (const v of vP) {
            console.log(v);
            i.next(v);
        }
    });
};

// function* gen() {
//     const vP = yield Promise.all([
//         promise1(),
//         promise2()
//     ]);
//     console.log(vP);
// }
//
// coroutine(gen);
module.exports = coroutine;