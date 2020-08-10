export {};
// const person : {
//     name: string;
//     age: number;
// } = {
// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string];
// } = {
//     name: 'John',
//     age: 20,
//     hobbies: ["Sports", "Cooking"],
//     role: [2, 'auther']
// }

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {ADMIN, READ_ONLY, AUTHOR};


const person = {
    name: 'John',
    age: 20,
    hobbies: ["Sports", "Cooking"],
    role: Role.READ_ONLY
}

if (person.role == Role.READ_ONLY){

    console.log('------------------- READ ONLY -----------------');
}

// person.role.push('a'); // TS can't catch this
person.role = Role.ADMIN;


console.log(person);

let favActivities : (string | number )[];
// let favActivities : any[]; // not recommended
favActivities = ['a', 6];

for (const hobby of person.hobbies){
    console.log(hobby.toUpperCase());
}

console.log(person.name);



// const product = {
//     id: 'abc1',
//     price: 12.99,
//     tags: ['great-offer', 'hot-and-new', 31, true, {a:'a'}],
//     details: {
//       title: 'Red Carpet',
//       description: 'A great carpet - almost brand-new!'
//     }
//   }

