var user1 = { id: "I1011", coursesTaught: 6 };
var user2 = { id: "A1015", accessLevel: "super" };
var user3 = { id: "I1236", accessLevel: "basic", coursesTaught: 2 };
var task = {
    title: "Final Project",
    dueDate: new Date(),
    points: 100
};
// task.points = 50; // Cannot assign to points because it is a read-only property.
var stats = {
    quizzes: "10",
    videos: "5",
    assignments: "2"
};
console.log(user1, user2, user3, task, stats);
