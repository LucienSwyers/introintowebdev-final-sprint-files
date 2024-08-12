console.log("functions.js is linked and working.");

function GetCarMakeAndModel(car) {
    return `${car.make} ${car.model}`;
}

function GetCarYear(car) {
    return `Year: ${car.year}`;
}

function GetCarDescription(car) {
    return `The car is a ${car.color} ${car.make} ${car.model} made in ${car.year}.`;
}

// Example usage:
const exampleCar = {"id": 1, "make": "Toyota", "model": "Corolla", "year": 2015, "color": "Blue"};
console.log(GetCarMakeAndModel(exampleCar));
console.log(GetCarYear(exampleCar));
console.log(GetCarDescription(exampleCar));
