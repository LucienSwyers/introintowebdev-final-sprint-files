console.log("displayData.js is linked and working.");

function DisplayCarData(cars) {
    const carDataDiv = document.getElementById("carData");

    cars.forEach(car => {
        const carInfo = document.createElement('p');
        carInfo.textContent = `${car.make} ${car.model} (${car.year}) - ${car.color}`;
        carDataDiv.appendChild(carInfo);
    });
}
