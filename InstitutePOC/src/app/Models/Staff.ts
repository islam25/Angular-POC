
export class Staff
{
    Id: Number;
    Name: string;
    Salary: Number;
    DepartmentName: string;

    constructor(id: Number, name: string , salary:Number, DepartmentName: string){
        this.Id = id;
        this.Name = name;
        this.Salary = salary;
        this.DepartmentName = DepartmentName;
    }
}