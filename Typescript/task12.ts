function displayMember(id: number, name: string, email?: string): void {
    console.log("ID:", id);
    console.log("Name:", name);
    if (email) {
        console.log("Email:", email);
    }
}

displayMember(101, "Rahul", "rahul@mail.com");
displayMember(102, "Arsh");

function calculateFines(...fines: number[]): number {
    let total = 0;
    for (let f of fines) {
        total += f;
    }
    return total;
}

let totalFine = calculateFines(5, 10, 2.5);
console.log("Total fine:", totalFine);


function membershipFee(amount: number, discount: number = 0.1): number {
    return amount - amount * discount;
}
console.log("Fee with default discount:", membershipFee(100));
console.log("Fee with 20% discount:", membershipFee(100, 0.2));

function greetVisitor(name: string, formatter: (n: string) => void): void {
    formatter(name);
}
const vipGreet = (name: string): void => {
    console.log("Welcome", name);
};

type VisitorFormatter = (name: string) => void;

let consoleGreet: VisitorFormatter = (name) => {
    console.log("Hello", name);
};

greetVisitor("Alice", vipGreet);
greetVisitor("Bob", consoleGreet);

function factorial(n: number): number {
    if (n <= 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

console.log("Factorial of 5:", factorial(5));

function generateReport(data: object[]): string;
function generateReport(data: object[], format: "json"): string;
function generateReport(data: any[], format?: string): string {
    if (format === "json") {
        return JSON.stringify(data, null, 2);
    }
    return data.map(item => item.title).join("\n");
}



let books = [
    { title: "1984" },
    { title: "To Kill a Mockingbird" },
    { title: "The Great Gatsby" },
    { title: "The Catcher in the Rye" }
];

console.log("Text Report:");
console.log(generateReport(books));

console.log("\n"+"JSON Report:");
console.log(generateReport(books, "json"));
