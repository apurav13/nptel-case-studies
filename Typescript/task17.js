var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Content = /** @class */ (function () {
    function Content(title, author) {
        this.published = false;
        this.title = title;
        this.author = author;
    }
    Content.prototype.publish = function () {
        this.published = true;
    };
    Content.prototype.isPublished = function () {
        return this.published;
    };
    return Content;
}());
var Assignment = /** @class */ (function (_super) {
    __extends(Assignment, _super);
    function Assignment(title, author, dueDate) {
        var _this = _super.call(this, title, author) || this;
        _this.dueDate = dueDate;
        return _this;
    }
    Assignment.prototype.updateDueDate = function (newDate, isInstructor) {
        if (!this.isPublished() && isInstructor) {
            this.dueDate = newDate;
        }
        else {
            throw new Error("Due date cannot be changed");
        }
    };
    Assignment.prototype.getDueDate = function () {
        return this.dueDate.toLocaleDateString("en-IN", {
            day: "numeric",
            month: "numeric",
            year: "numeric"
        });
    };
    Assignment.prototype.getType = function () {
        return "Assignment";
    };
    return Assignment;
}(Content));
var assign = new Assignment("OOP Assignment", "Prof. JP Sharma", new Date("2026-02-13"));
console.log("Type:", assign.getType());
console.log("Initial Due:", assign.getDueDate());
assign.updateDueDate(new Date("2026-02-17"), true);
console.log("Updated Due:", assign.getDueDate());
assign.publish();
var assign2 = new Assignment("Data Structures Assignment", "Prof. Anuj Kumar", new Date("2026-02-20"));
console.log("Type:", assign2.getType());
console.log("Initial Due:", assign2.getDueDate());
assign2.updateDueDate(new Date("2026-02-22"), true);
console.log("Updated Due:", assign2.getDueDate());
assign2.publish();
