// 45. Cars: Create detailed car objects with flexible properties.
// // solution
function car_object(manufacturer, model, ...options) {
    let car = { manufacturer, model };
    options.forEach(([key, value]) => car[key] = value);
    return car;
}
console.log(car_object('Toyota', 'Carolla', ['color', 'red'], ['year', 2020]));
console.log(car_object("Ford", "Fiesta", ["color", "blue"], ["sunroof", true]));
export {};
