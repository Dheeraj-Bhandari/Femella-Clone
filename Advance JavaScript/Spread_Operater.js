var arr = [20,30,40];

function sum(...args){
    let sum = 0;
    for(let i in args){
        sum +=args[i];
    }
    console.log(sum);
}

sum(...arr);

var arr2 = [...arr];
console.log(arr2);

arr[0] = 30;

console.log(arr2);
console.log(arr);

let arr3 = [...arr, ...arr2, 65, 30]
console.log(arr3);
arr3= arr.concat(arr2);

console.log(arr3)

//  Merging Obj

var obj1 = {
    name:"Dheeraj",
    Age:29,


}

var obj2= {
    Profession: "SDE",
}

console.log({...obj1, ...obj2});

