 console.log("first");
/* setInterval(() => {
    console.log('thid');
}, 3000);  */

let seconds = 0;
const timeId = setInterval(() => {
    // seconds++;
    // console.log(seconds);
    // console.log(seconds++);
    console.log(++seconds);
    if(seconds > 15 ){
        clearInterval(timeId);
    }
}, 1000);
console.log('second'); 


/* console.log('first');
setInterval(() => {
    console.log("final");
}, 2000);
console.log('last'); */