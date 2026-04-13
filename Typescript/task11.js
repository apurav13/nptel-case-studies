var transactions = [
    { id: 1, type: "checkout" },
    { id: 2, type: "cancelled" },
    { id: 3, type: "return" },
    { id: 4, type: "checkout" },
    { id: 5, type: "priority" }
];
var count = {
    checkout: 0,
    return: 0,
    priority: 0,
    cancelled: 0
};
for (var i = 0; i < transactions.length; i++) {
    count[transactions[i].type]++;
}
console.log("Transaction count:", count);
var index = 0;
while (true) {
    var tx = transactions[index];
    if (tx.type === "priority") {
        console.log("Priority transaction found:", tx.id);
        break;
    }
    index++;
}
var returnQueue = [
    { id: 6, type: "return" }
];
var pos = 0;
do {
    var tx = returnQueue[pos];
    if (pos === 0) {
        returnQueue.push({ id: 7, type: "return" });
    }
    pos++;
} while (pos < returnQueue.length);
console.log("Return queue:", returnQueue);
var inventory = {
    "Murakami": 15,
    "Ruskin bond": 23,
    "Power of your subconscious mind": 19
};
console.log("Inventory", inventory);
for (var book in inventory) {
    inventory[book] = 0;
}
console.log("Inventory reset:", inventory);
var visitors = ["Ankit", "Anil", "Jitender", "Vikram"];
for (var i = visitors.length - 1; i >= 0; i--) {
    console.log("Visitor:", visitors[i]);
}
