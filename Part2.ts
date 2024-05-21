// Part-2:
// Part 2: Car Details
// Challenge:
// 1.Design a type alias named Car to represent a car object.
// 2.Include a nested object named engine within Car, containing a property named horsepower(number).
// 3.Define a function named getHorsepowerdirectly within the Car type alias to retrieve the engine's horsepower.


// Answer:
// Define the Car type alias
type Car = {
    model: string;
    make: string;
    year: number;
    engine: {
        horsepower: number;
    };
    getHorsepower: () => number;
};


// Example usage:
const myCar: Car = {
    model: "Model S",
    make: "Tesla",
    year: 2023,
    engine: {
        horsepower: 670
    },
    getHorsepower() {
        return this.engine.horsepower;
    }
};


// Log the car details and horsepower to the console
console.log("Car Details:", myCar);
console.log("Horsepower:", myCar.getHorsepower());