console.log("fetchData.js is linked and working.");

fetch('cars.json')
    .then(response => response.json())
    .then(data => {
        console.log("cars.json data:", data);
        DisplayCarData(data);
    })
    .catch(error => console.error('Error fetching cars.json:', error));
