module.exports = function coroutine(generatorFN) {
    const i = generatorFN();
    i.next().value.then((vP) => {
        for (const v of vP) {
            // console.log(v);
            i.next(v);
        }
    });
};
