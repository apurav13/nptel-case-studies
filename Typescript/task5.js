var recordedAnswers = {};
function recordAnswer(question, answer) {
    recordedAnswers[question] = answer;
}
recordAnswer(1, "True");
recordAnswer(2, 2016);
recordAnswer(3, ["A", "B", "C", "D"]);
for (var id in recordedAnswers) {
    console.log("Question", id, ":", recordedAnswers[id]);
}
