function displayMember(id, name, email) {
    console.log("ID:", id);
    console.log("Name:", name);
    if (email) {
        console.log("Email:", email);
    }
}
displayMember(101, "Rahul", "rahul@mail.com");
displayMember(102, "Arsh");
function calculateFines() {
    var fines = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fines[_i] = arguments[_i];
    }
    var total = 0;
    for (var _a = 0, fines_1 = fines; _a < fines_1.length; _a++) {
        var f = fines_1[_a];
        total += f;
    }
    return total;
}
var totalFine = calculateFines(5, 10, 2.5);
console.log("Total fine:", totalFine);
function membershipFee(amount, discount) {
    if (discount === void 0) { discount = 0.1; }
    return amount - amount * discount;
}
console.log("Fee with default discount:", membershipFee(100));
console.log("Fee with 20% discount:", membershipFee(100, 0.2));
function greetVisitor(name, formatter) {
    formatter(name);
}
var vipGreet = function (name) {
    console.log("Welcome", name);
};
var consoleGreet = function (name) {
    console.log("Hello", name);
};
greetVisitor("Alice", vipGreet);
greetVisitor("Bob", consoleGreet);
function factorial(n) {
    if (n <= 1) {
        return 1;
    }
    return n * factorial(n - 1);
}
console.log("Factorial of 5:", factorial(5));
function generateReport(data, format) {
    if (format === "json") {
        return JSON.stringify(data, null, 2);
    }
    return data.map(function (item) { return item.title; }).join("\n");
}
var books = [
    { title: "1984" },
    { title: "To Kill a Mockingbird" },
    { title: "The Great Gatsby" },
    { title: "The Catcher in the Rye" }
];
console.log("Text Report:");
console.log(generateReport(books));
console.log("\n" + "JSON Report:");
console.log(generateReport(books, "json"));
