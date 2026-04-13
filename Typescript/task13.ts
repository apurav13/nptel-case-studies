function describePerson(name: string, age?: number): void {
    if (age === undefined) {
        console.log("Name: " + name + ", Age: Unknown");
    } else {
        console.log("Name: " + name + ", Age: " + age);
    }
}
function calculatePrice(basePrice: number, discount: number = 0.1): number {
    return basePrice - (basePrice * discount);
}
describePerson("Eve");
describePerson("Frank", 28);
console.log(calculatePrice(100));
console.log(calculatePrice(100, 0.2));