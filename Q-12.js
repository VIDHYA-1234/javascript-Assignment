// Create a human readable time format using the Date time object

// YYYY-MM-DD HH:mm
const current =new Date()
// const format1 = current.toISOString()
// console.log(format1);

// DD-MM-YYYY HH:mm

const format2= current.toLocaleString("en-CA",{year:'numeric',month:'2-digit',day:'2-digit',hours:'2-digit',minute:'2-digit',second:'2-digit'});
console.log(format2);

// DD/MM/YYYY HH:mm
// const format3= current.toLocaleString()
// console.log(format3);
