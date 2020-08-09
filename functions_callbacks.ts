function add(n1:number, n2:number){
    return n1 + n2;
}

function printResult(num: number){
    console.log('Result: ' + num); // this has void return type
    // return true;
}

function addAndHandler(n1:number, n2:number, cb: (a: number) => void){
    const result = n1 + n2;
    cb(result);
}

printResult(add(5, 10));


let combineVal: (a: number, b: number) => number;

combineVal = add;
// combineVal = 5;
console.log(combineVal(8, 8));

addAndHandler(10, 50, printResult);



function sendRequest(data: string, cb: (response: any) => void) {
    // ... sending a request with "data"
    return cb({data: 'Hi there!'});
  }
   
sendRequest('Send this!', (response) => { 
console.log(response);
return true;
});