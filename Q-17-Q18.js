// Write a program which tells the number of days in a month.

// a program which tells the number of days in a month.
function getDaysInMonth(month,year){
    return new Date(year,month,0).getDate();
}
//  April is not leap year
console.log(getDaysInMonth(3,2023));



//  Write a program which tells the number of days in a month, now consider leap year.

// february is leap year
console.log(getDaysInMonth(2,2024))