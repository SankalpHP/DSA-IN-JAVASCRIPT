/**
 * ES2015 CLASS SYNTAX
 * A class defines a blueprint for creating multiple student objects
 * with shared structure and behavior.
 */
class Student {

    constructor(firstName, lastName, year) {
        // 'this' refers to the individual instance being created
        this.firstName = firstName;
        this.lastName = lastName;
        this.year = year;

        // Each student instance gets its own separate marks array
        this.marks = [];
    }

    // Instance Method: returns full name of the student
    getFull() {
        return `Your full name is ${this.firstName} ${this.lastName}`;
    }

    // Instance Method: adds a mark to this student's marks array
    addMarks(mark) {
        this.marks.push(mark);
    }
}


/**
 * IMPORTANT NOTES ABOUT 'this' IN A CLASS:
 *
 * 1️⃣ Inside the constructor, 'this' refers to the **current instance** being created.
 * 
 *    Example:
 *      let firstStudent = new Student("Sankalp", "Selokar", 3);
 *      → Inside constructor, 'this' refers to 'firstStudent'.
 *
 * 2️⃣ Each time you create a new instance (using 'new Student(...)'),
 *     a brand-new object is created with its own:
 *        - firstName
 *        - lastName
 *        - year
 *        - marks []
 *
 * 3️⃣ That’s why:
 *      - firstStudent.marks is different from secondStudent.marks  
 *      - firstStudent.name is different from secondStudent.name  
 *
 * 4️⃣ Instance methods (like getFull() and addMarks()) use 'this' to
 *     access the data of the specific instance they are called on.
 */


let firstStudent = new Student("Sankalp", "Selokar", 3);
let secondStudent = new Student("Colt", "Wallet", 4);

console.log(firstStudent);
console.log(secondStudent);

firstStudent.addMarks(80);
firstStudent.addMarks(75);

secondStudent.addMarks(100);
secondStudent.addMarks(70);

console.log(firstStudent.getFull());
console.log(secondStudent.getFull());

console.log(firstStudent.marks);
console.log(secondStudent.marks);
