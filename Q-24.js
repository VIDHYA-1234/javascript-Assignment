// 24. Write a program to create two array "even" and "odd" having even and odd number between the 0 to 100 (0 and 100 included).

let evenarry=[]
for(let i=1; i<=100; i++){
    if(i % 2 == 0){
        console.log(evenarry.push(i))
    }
}
console.log(evenarry)

let oddarry=[];
for(i=1; i<=100; i++){
    if(i % 2 != 0){
        console.log(oddarry.push(i))
    }
}
console.log(oddarry)