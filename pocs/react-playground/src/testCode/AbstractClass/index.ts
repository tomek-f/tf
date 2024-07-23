import Department from './department';

class AccountingDepartment extends Department {
    constructor() {
        super('Accounting and Auditing'); // constructors in derived classes must call super()
    }

    printMeeting(): void {
        console.log(
            'The Accounting Department meets each Monday at 10am.',
            this,
        );
    }

    generateReports(): void {
        console.log('Generating accounting reports...', this);
    }
}

// const a: Department = new Department(); // error: cannot create an instance of an abstract class
const department: AccountingDepartment = new AccountingDepartment(); // ok to create and assign a non-abstract subclass

department.printName();
department.printMeeting();
department.generateReports();

console.log('elo', AccountingDepartment.elo);
