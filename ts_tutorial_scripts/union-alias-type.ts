type num_string = number | string;

function combine(input1: num_string, input2: num_string){
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number'){
        result = input1 + input2;
    } else {
        result = input1 + input2.toString();
    }
    
    return result;   
}

const combineAges = combine(10, 20);
console.log(combineAges);

const combineNames = combine('John', ' Doe');
console.log(combineNames);


type Product = {title : string, price: number} | string;
let p1: Product= {
    title: 'abc',
    price: 4.6,
    //is_listed: true
}
p1 = '5';

