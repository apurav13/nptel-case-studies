let recordedAnswers: any = {};
function recordAnswer(question: number, answer: any): void {
    recordedAnswers[question] = answer;
}
recordAnswer(1, "True");
recordAnswer(2, 2016);
recordAnswer(3, ["A", "B", "C", "D"]);
for (let id in recordedAnswers) {
    console.log("Question", id, ":", recordedAnswers[id]);
}