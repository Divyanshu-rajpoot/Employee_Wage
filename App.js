const IS_Absent = 0;
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const Num_OF_WORKING_DAYS = 20;

let empCheck = Math.floor(Math.random()* 10) % 2;

if(empCheck == IS_Absent){
    console.log("Employee is Absent");
    return;
}
else{
    console.log("Employee is Present");
}

function getWorkingHours(empCheck){
    switch (empCheck) {
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return PART_TIME_HOURS;
        default:
            return 0;
    }
}
let empHrs = 0;

for (let day = 0; day < Num_OF_WORKING_DAYS; day++) {
        empCheck = Math.floor(Math.random()* 10) % 3;
        empHrs += getWorkingHours(empCheck);
}
let empWage = empHrs * WAGE_PER_HOUR ;
console.log("Emp Wage: "  +empWage)

