interface Person {
    name?: string,
    age: number,
    greet(phrase: string):void;
}

// const user: Person = {
//     name: 'John',
//     age: 22,
//     greet(phrase: string) {
//         console.log(`${phrase}! ${this.name}`);
//     }
// }
// user.greet('Good Morning')

class PersonDetails implements Person {
    name?: string;
    age: number;

    constructor(name?: string, age: number = 0){
        if(this.name) {
            this.name = name;
        }
        
        this.age = age;
    }

    greet(phrase: string) {
        if (this.name) {
            console.log(`${phrase}! ${this.name} - it seems your age is ${this.age}.`);
        }
        else {
            console.log('Name NOT FOUND');
        }
        
    }
}

const user = new PersonDetails();
user.greet('Good Evening')

