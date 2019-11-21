
/**
 * promise
 * - pending
 * - resolved / rejected
 */
const timerPromise : Promise<string> = new Promise((resolve, reject) => {
    console.log('how many times is this called promise?');
    setTimeout(() => {
        resolve('hello world');
        // reject(new Error('...'));

        // resolve('hello world1');
    }, 1000);
});

timerPromise.then((msg) => {
    console.log(msg);
    console.log('dfg');
});

timerPromise.then((msg) => {
    console.log(msg);
    console.log('dfg');
})