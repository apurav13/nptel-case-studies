var Role;
(function (Role) {
    Role[Role["Doctor"] = 0] = "Doctor";
    Role[Role["Nurse"] = 1] = "Nurse";
    Role[Role["Admin"] = 2] = "Admin";
})(Role || (Role = {}));
var staffMembers = [
    { id: 1, name: "Dr. Rajender", role: Role.Doctor },
    { id: 2, name: "Anchal", role: Role.Nurse },
    { id: 3, name: "Ronit", role: Role.Admin },
    { id: 4, name: "Dr. R.K Sharma", role: Role.Doctor },
    { id: 5, name: "Nidhi", role: Role.Nurse },
    { id: 6, name: "Abhishek", role: Role.Admin },
    { id: 7, name: "Dr. Aditiya", role: Role.Doctor }
];
function printStaffSummary(staff) {
    console.log("--- Hospital Staff Directory ---" + "\n");
    for (var _i = 0, staff_1 = staff; _i < staff_1.length; _i++) {
        var x = staff_1[_i];
        console.log("Name:", x.name, "Role:", Role[x.role]);
    }
}
printStaffSummary(staffMembers);
