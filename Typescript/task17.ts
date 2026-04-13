abstract class Content {
    public readonly title: string;
    public readonly author: string;
    private published: boolean = false;
    constructor(title: string, author: string) {
        this.title = title;
        this.author = author;
    }
    public publish(): void {
        this.published = true;
    }
    protected isPublished(): boolean {
        return this.published;
    }
    abstract getType(): string;
}

class Assignment extends Content {
    private dueDate: Date;
    constructor(title: string, author: string, dueDate: Date) {
        super(title, author);
        this.dueDate = dueDate;
    }
    public updateDueDate(newDate: Date, isInstructor: boolean): void {
        if (!this.isPublished() && isInstructor) {
            this.dueDate = newDate;
        } else {
            throw new Error("Due date cannot be changed");
        }
    }
    public getDueDate(): string {
        return this.dueDate.toLocaleDateString("en-IN", {
            day: "numeric",
            month: "numeric",
            year: "numeric"
        });
    }
    public getType(): string {
        return "Assignment";
    }
}

let assign = new Assignment(
    "OOP Assignment",
    "Prof. JP Sharma",
    new Date("2026-02-13")
);

console.log("Type:", assign.getType());
console.log("Initial Due:", assign.getDueDate());
assign.updateDueDate(new Date("2026-02-17"), true);
console.log("Updated Due:", assign.getDueDate());
assign.publish();

let assign2 = new Assignment(
    "Data Structures Assignment",
    "Prof. Anuj Kumar",
    new Date("2026-02-20")
);
console.log("Type:", assign2.getType());
console.log("Initial Due:", assign2.getDueDate());
assign2.updateDueDate(new Date("2026-02-22"), true);
console.log("Updated Due:", assign2.getDueDate());
assign2.publish();