import { Observable, Subscription, Subject, interval } from "rxjs";



/**
 * 1. Promise emits a pulse once
 * Observable emits how many we want
 */

const helloObservable : Observable<string> = new Observable((observer) => {
    console.log('how many times is this called observable?');
    let counter = 0;
    const intervalId = setInterval(() => {
        if (counter < 3) {
            observer.next('hello world');    
        } else {
            // observer.complete();
            observer.error(new Error(''))
        }
        counter++
    }, 1000);

    return () => {
        clearInterval(intervalId);
    }
});

// interval(1000).subscribe(() => {

// })

/**
 * 2. observables are lazy
 * if there are no listeners they will not run the async function
 */

 /**
  * 3. observables are cancelable
  * 
  */

const timerSubscription : Subscription = helloObservable.subscribe(
    (msg : string) => {
        console.log(msg);
    },
    (err: Error) => {

    },
    () => {
        console.log('we are closed');
    }
);

// timerSubscription.unsubscribe();


// closing an observable
// 1. complete // from the async function
// 2. error // from the async function
// 3. unsubscribe // from outside


/**
 * promise runs async function once
 * obsevable will run for every listener
 */

// helloObservable.subscribe();


// subject vs observable
// one data stream
// no async function

// const intervalSubject : Subject<number> = new Subject();


// intervalSubject.subscribe((num) => {

// })

// intervalSubject.next(10);

// setTimeout(() => {
//     intervalSubject.next(20);
// }, 1000);
