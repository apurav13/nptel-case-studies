function processTransaction(amount, description, isCredit) {
    if (amount < 0)
        throw new Error("Transaction amount cannot be negative");
    var type = isCredit ? "Credit" : "Debit";
    if (description === undefined) {
        console.log("Transaction:", type);
        console.log("Amount:", amount);
        console.log("No Description");
    }
    else {
        console.log("Transaction:", type);
        console.log("Amount:", amount);
        console.log("Description:", description);
    }
}
processTransaction(380, "Canteen Bill", false);
processTransaction(600, undefined, false);
processTransaction(1200, "Salary", true);
processTransaction(250, "Electricity Bill", false);
processTransaction(90, undefined, false);
