enum Role {
    Doctor,
    Nurse,
    Admin
}
interface Staff {
    id: number;
    name: string;
    role: Role;
}
let staffMembers: Staff[] = [
    { id: 1, name: "Dr. Rajender", role: Role.Doctor },
    { id: 2, name: "Anchal", role: Role.Nurse },
    { id: 3, name: "Ronit", role: Role.Admin },
    { id: 4, name: "Dr. R.K Sharma", role: Role.Doctor },
    { id: 5, name: "Nidhi", role: Role.Nurse },
    { id: 6, name: "Abhishek", role: Role.Admin },
    { id: 7, name: "Dr. Aditiya", role: Role.Doctor }
];
function printStaffSummary(staff: Staff[]): void {
    console.log("--- Hospital Staff Directory ---"+"\n");
    for (let x of staff) {
        console.log("Name:", x.name, "Role:", Role[x.role]);
    }
}
printStaffSummary(staffMembers);