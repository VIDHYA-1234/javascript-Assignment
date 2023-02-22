// 22. The following is an array of 10 students ages:
//     => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
//     - Sort the array and find the min and max age
//     - Find the median age(one middle item or two middle items divided by two)
//     - Find the average age(all items divided by number of items)
//     - Find the range of the ages(max minus min)
//     - Compare the value of (min - average) and (max - average), use abs() method

// - Sort the array and find the min and max age
const ages =[19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
const sorted=ages.sort((a,b) => a-b)
console.log(sorted)

let min= Math.min(...sorted)
console.log(min)

let max=Math.max(...sorted)
console.log(max)

// - Find the median age(one middle item or two middle items divided by two)
let middleIndex=sorted.length/2
 let median=(sorted[middleIndex] +sorted[middleIndex-1])/2
 console.log(median)

//  - Find the average age(all items divided by number of items)
const initialvalue=0;
const sum=sorted.reduce(
    (accumulator,currentvalue)=>accumulator+currentvalue,initialvalue
)
const averageValue=sum/sorted.length
console.log(averageValue)

// - Find the range of the ages(max minus min)
console.log(max-min)


