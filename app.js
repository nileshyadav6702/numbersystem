const numbers = [
    19, 23, 4, 16, 28, 13, 31, 8, 29, 14, 6, 35, 2, 11, 17, 5, 9, 27, 12, 30,
  ];
const primeArray=[]
for(let i=0;i<numbers.length;i++){
    let count=0
    for(let j=0;j<=numbers[i];j++){
        if(numbers[i]%j==0){
            count++
        }
    }
    if(count==2){
        primeArray.push(numbers[i])
        console.log(numbers[i],'is a prime number')
    }
}
let maximum=primeArray[0]
let minimum=primeArray[0]
let sumofprime=0
for(let i=0;i<primeArray.length;i++){
    sumofprime+=primeArray[i]
    if(maximum<primeArray[i]){
        maximum=primeArray[i]
    }
    if(minimum>primeArray[i]){
        minimum=primeArray[i]
    }
}

console.log(primeArray,maximum,minimum,sumofprime)