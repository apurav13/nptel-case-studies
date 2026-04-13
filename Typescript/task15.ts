type Learner = { id: string; quizzesCompleted: number };
type Instructor = { id: string; coursesTaught: number };
type Admin = { id: string; accessLevel: "basic" | "super" };
type InstructorOrAdmin = Instructor | Admin;

type Assignment = {
    title: string;
    dueDate: Date;
    points: number;
};
type ReadonlyAssignment = Readonly<Assignment>;

type LearnerStats = {
    quizzes: number;
    videos: number;
    assignments: number;
};
type StatsAsStrings = {[K in keyof LearnerStats]: string;};

let user1: InstructorOrAdmin = { id: "I1011", coursesTaught: 6 };
let user2: InstructorOrAdmin = { id: "A1015", accessLevel: "super" };
let user3: InstructorOrAdmin = { id: "I1236", accessLevel: "basic", coursesTaught: 2 };

const task: ReadonlyAssignment = {
    title: "Final Project",
    dueDate: new Date(),
    points: 100
};
// task.points = 50; // Cannot assign to points because it is a read-only property.
let stats: StatsAsStrings = {
    quizzes: "10",
    videos: "5",
    assignments: "2"
};
console.log(user1, user2,user3, task, stats);