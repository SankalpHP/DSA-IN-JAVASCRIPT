/**
 * ES2015 CLASS SYNTAX
 * A class is a blueprint for creating multiple objects (instances) with shared structure and behavior.
 */
class Student {

    // The constructor runs automatically whenever a new instance is created.
    constructor(firstName, lastName, year) {
        this.firstName = firstName;  // Assign first name to the instance
        this.lastName = lastName;    // Assign last name to the instance
        this.year = year;            // Assign academic year to the instance
    }
}

/**
 * IMPORTANT NOTES:
 * 
 * 1️⃣ The 'new' keyword is used to create an instance/object from a class.
 * 
 * 2️⃣ When you call 'new Student(...)', JavaScript automatically:
 *      - Creates a new empty object.
 *      - Sets 'this' inside the constructor to the new object.
 *      - Calls the constructor method to initialize properties.
 *      - Returns the newly created object.
 * 
 * 3️⃣ The constructor() method is a special method that:
 *      - Runs automatically when an object is created.
 *      - Initializes properties for that particular instance.
 */

let firstStudent = new Student("Sankalp", "Selokar", 3);
let secondStudent = new Student("Colt", "Steele", 4);

console.log(firstStudent);
console.log(secondStudent);
