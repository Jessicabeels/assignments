//First, you will create an array named employees


var employees = []

//Next, you will create an Employee constructor with the first 
//three attributes defined at the time of instantiation and the fourth will be defaulted to "Full Time".

function Employee(eName, jobTitle, salNumber) {
    this.name = eName;
    this.job = jobTitle;
    this.salary = salNumber;
    this.status = "Full Time";
    this.printEmployeeForm = function() {
        return  "Employee Information: Name = " + this.name + ", Job = " + this.job + ", Salary = " + this.salary + ", Status = " + this.status
    
    }
}

//Instantiate three employees

var mike = new Employee("Mike", "Engineer", 90000)
// console.log(mike.salary)
var pam = new Employee("Pam", "receptionist", 100000)
var jim = new Employee("Jim", "Sales Rep", 60000)

//Override the status attribute of one of them to either "Part Time" or "Contract"
//????
mike.status = "contract"
// mike.prototype.status()
console.log(mike.status)


//Call the printEmployeeForm method for each employee

console.log(pam.printEmployeeForm())
console.log(mike.printEmployeeForm())
console.log(jim.printEmployeeForm()) //outputs Employee Information: Name = Jim, Job = Sales Rep, Salary = 60000, Status = Full Time
//why outputting undefined?


//Put the generated employees into the employees array using whichever method you prefer.


employees.push(pam, jim, mike)


console.log(employees)