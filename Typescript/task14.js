var FeedbackBox = /** @class */ (function () {
    function FeedbackBox() {
        this.items = [];
    }
    FeedbackBox.prototype.addFeedback = function (feedback) {
        this.items.push(feedback);
    };
    FeedbackBox.prototype.getAllFeedback = function () {
        return this.items;
    };
    return FeedbackBox;
}());
function getFirstItem(arr) {
    return arr[0];
}
var quizFeedback = new FeedbackBox();
quizFeedback.addFeedback("Easy quiz for me");
quizFeedback.addFeedback("Questions were tough not expected this much difficulty");
quizFeedback.addFeedback("Average quiz, expected more questions");
console.log(quizFeedback.getAllFeedback());
var lessonFeedback = new FeedbackBox();
lessonFeedback.addFeedback({ rating: 1, comment: "Did not understand much" });
lessonFeedback.addFeedback({ rating: 2, comment: "Needs more examples" });
lessonFeedback.addFeedback({ rating: 3, comment: "Average explanation" });
lessonFeedback.addFeedback({ rating: 4, comment: "Nice explanation" });
lessonFeedback.addFeedback({ rating: 5, comment: "Very helpful lesson" });
console.log(lessonFeedback.getAllFeedback());
console.log(getFirstItem([10, 20, 30, 40, 50, 60]));
console.log(getFirstItem(["Football", "Cricket", "Chess", "Hockey", "Badminton"]));
console.log(getFirstItem(["Aryan", "Akash", "Rahul", "Arsh", "Aman", "Ankit", "Anshul"]));
