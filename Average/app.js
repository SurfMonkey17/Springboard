//Write a function to find the average value in an array of numbers. 
//use loop and division


function average(arr) {
    let sum = 0; 
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return (sum/arr.length);
}

console.log(average([0, 50])); //25
console.log(average([75, 76, 80, 95, 100]));  //85.2