export {};
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'John';

// if(typeof userInput === 'string'){
//     userName = userInput;
// }

function generateError(message: string, code: number): never{
    // return true;
    throw {message: message, errorCode: code};
}

const res = generateError('ERRORRRRR!!', 500);
// console.log(res);