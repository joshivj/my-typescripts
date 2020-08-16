class Department{
    // private name: string;
    // private employees: string[] = [];

    constructor(public name: string, protected employees: any[] = []) {
        this.name = name;
        this.employees = employees;
    }

    describe(this: Department) {
        console.log(`Welcome to ${this.name}`);
    }

    addEmployee(...employee: any[]){
        this.employees.push(...employee)
    }

    printEmployeeInfo(){
        console.log('Total employees are ' + this.employees.length);
        console.log(this.employees);
    }
}

const accounts = new Department('Accounts');
// console.log(accounts);
// accounts.name = 'Mech';
// console.log(accounts);
accounts.describe();
// console.log(accounts.employees); //this won't work as it is now private
accounts.addEmployee('John Doe', 'Jack', ...['Ashok', 'Vipul', ...['Amit']]);
// console.log(accounts.employees);
// accounts.addEmployee('Jack');
// console.log(accounts.employees);

accounts.printEmployeeInfo();
// const accountingCopy = {name: 'Dummpy', describe: accounts.describe };
// accountingCopy.describe();


//this won't work as it is now private
// accounts.employees = [];
// console.log(accounts.employees);

console.log('********************************************');

class ITDept extends Department {
    // admins: string [];
    private lastAdmin: string;
    private static instance: ITDept;

    private constructor(public admins: string[] = []) {
        super('IT Department');
        this.admins = admins;
        this.lastAdmin = admins[0];
    }

    static getInstance() {
        if(ITDept.instance) {
            return this.instance;
        }
        this.instance = new ITDept();
        return this.instance;

    }

    get mostrecentAdmin() {
        if (this.lastAdmin) {
            return this.lastAdmin;
        }
        else {
            throw new Error('No Admin FOUND');
        }
    }

    set mostrecentAdmin(value) {
        if (!value){
            throw new Error('Set correct value')
        }
        else{
            this.addAdmins(value);
        }
    }

    addAdmins(name: string) {
        this.admins.push(name);
        this.lastAdmin = name;
    }

    listAdmins() {
        console.log(`Here are the admins of the ${this.name} -  ${this.admins}`);
    }

    printEmployeeInfo(){
        console.log('IT Total employees are ' + this.employees.length);
        console.log(this.employees);
    }
}

//const itdept = new ITDept(); //can't be used as it is singleton now
const itdept = ITDept.getInstance();
const itdept2 = ITDept.getInstance();

console.log(itdept, itdept2);
// console.log(itdept.mostrecentAdmin);
// itdept.mostrecentAdmin = 'Ronny';

itdept.addEmployee('Marco', 'Polo');

itdept.describe();
itdept.printEmployeeInfo();
itdept.addAdmins('Rohit');
itdept2.addAdmins('Shiv'); //as it is singleton both are the same instance
console.log(itdept.mostrecentAdmin);
itdept.listAdmins();

console.log('----------------------------------------------');


