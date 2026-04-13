type TransactionType = "checkout" | "return" | "priority" | "cancelled";
type Transaction = {
    id: number;
    type: TransactionType;
};
let transactions: Transaction[] = [
    { id: 1, type: "checkout" },
    { id: 2, type: "cancelled" },
    { id: 3, type: "return" },
    { id: 4, type: "checkout" },
    { id: 5, type: "priority" }
];

let count: { [key in TransactionType]: number } = {
    checkout: 0,
    return: 0,
    priority: 0,
    cancelled: 0
};
for (let i = 0; i < transactions.length; i++) {
    count[transactions[i].type]++;
}
console.log("Transaction count:", count);

let index = 0;
while (true) {
    let tx = transactions[index];
    if (tx.type === "priority") {
        console.log("Priority transaction found:", tx.id);
        break;
    }
    index++;
}

let returnQueue: Transaction[] = [
    { id: 6, type: "return" }
];

let pos = 0;
do {
    let tx = returnQueue[pos];
    if (pos === 0) {
        returnQueue.push({ id: 7, type: "return" });
    }
    pos++;
} while (pos < returnQueue.length);
console.log("Return queue:", returnQueue);

let inventory: { [book: string]: number } = {
    "Murakami": 15,
    "Ruskin bond": 23,
    "Power of your subconscious mind": 19
};
console.log("Inventory", inventory);


for (let book in inventory) {
    inventory[book] = 0;
}
console.log("Inventory reset:", inventory);

let visitors: string[] = ["Ankit", "Anil", "Jitender", "Vikram"];

for (let i = visitors.length - 1; i >= 0; i--) {
    console.log("Visitor:", visitors[i]);
}