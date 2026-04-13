function describePerson(name, age) {
    if (age === undefined) {
        console.log("Name: " + name + ", Age: Unknown");
    }
    else {
        console.log("Name: " + name + ", Age: " + age);
    }
}
function calculatePrice(basePrice, discount) {
    if (discount === void 0) { discount = 0.1; }
    return basePrice - (basePrice * discount);
}
describePerson("Eve");
describePerson("Frank", 28);
console.log(calculatePrice(100));
console.log(calculatePrice(100, 0.2));
