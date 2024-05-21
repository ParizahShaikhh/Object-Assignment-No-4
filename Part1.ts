// Part-1:
// Part 1: Employee Data
// Challenge:
// 1.Design a type alias named Employee to represent an employee object with properties like name(string), department(string), and role(string).
// 2.Include an optional nested object named contact to hold phone and email information (if provided).
// 3.Employ a union type for the role property to restrict it to "Manager", "Engineer", or "Intern".
// 4.Make the skills property an optional array of strings for listing an employee's skills (if any).


// Answer:

// Define a type alias for the role property
type Role = "Manager" | "Engineer" | "Intern";

// Define a type alias for the contact property
type Contact = {
    phone?: string;
    email?: string;
};

// Define the Employee type alias
type Employee = {
    name: string;
    department: string;
    role: Role;
    contact?: Contact; // Optional nested object
    skills?: string[]; // Optional array of strings
};

// Example usage:
const employee1: Employee = {
    name: "Parizah Shaikh",
    department: "Engineering",
    role: "Engineer",
    contact: {
        phone: "000-999-88874",
        email: "parivian6@gmail.com"
    },
    skills: ["JavaScript", "TypeScript", "React"]
};

const employee2: Employee = {
    name: "Hunaina",
    department: "Human Resource",
    role: "Manager",
    contact: {
        email: "abcdd@gmail.com"
    },
    skills: ["Leadership", "Communication", "Project Management"]
};

const employee3: Employee = {
    name: "Hadi",
    department: "Marketing",
    role: "Intern",
    contact: {
        email: "abc@gmail.com"
    },
    skills: ["SEO", "Content Creation"]
};

// Log the employee details to the console
console.log("Employee 1:", employee1);
console.log("Employee 2:", employee2);
console.log("Employee 3:", employee3);