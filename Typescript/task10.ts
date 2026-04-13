function checkSign(num: number): void {
    if (num > 0) {
        console.log(num, "number is positive");
    }else{
        console.log(num, "number is negative");
    }
}
function evenOrOdd(num: number): void {
    if (num % 2 === 0) {
        console.log(num, "numberis even");
    } else {
        console.log(num, "number is odd");
    }
}
function getGrade(score: number): string {
    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}
function provideFeedback(grade: string): void {
    switch (grade) {
        case "A":
      console.log("Feedback: Excellent performance!");
      break;
    case "B":
      console.log("Feedback: Great job! Keep it up.");
      break;
    case "C":
      console.log("Feedback: Good effort; aim higher next time.");
      break;
    case "D":
      console.log("Feedback: Needs improvement; review your work.");
      break;
    default:
      console.log("Feedback: Unsatisfactory; please seek help.");
      break;
            
    }
}
checkSign(5);
checkSign(-3);
evenOrOdd(4)
evenOrOdd(7);
let user = getGrade(82);
console.log("Grade:", user);
provideFeedback(user);
let user1 = getGrade(69);
console.log("Grade:", user1);
provideFeedback(user1);
let user2 = getGrade(69);
console.log("Grade:", user2);
provideFeedback(user2);