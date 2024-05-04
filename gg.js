num =[1,2,3,4,5]
for(k of num){
    for(i=1;i<=k;i++){
    if(k%i==0){
    }
}
// console.log(k)
}
// 2)
arr=[{name:"prashnth",age:20},{name:"teja",age:22},{name:"shiva",age:15}];
arr1=arr.filter(function(Hello){
    return Hello.age>18
})
// console.log(arr1)

// 2)
let arr = [15, 2, 3, 22, 100];
let len = arr.length;

for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}

console.log(arr);


// 4)
let arr4= [1,2,3,4,5]
let res4=arr4.reduce((acc,value)=>{
   return acc+value
})
// console.log(res4)


// 5)
let arr5=[13,67.31,45,11,10,77,88]
let res5=arr5.every((x)=>x>18)
// console.log(res5)
