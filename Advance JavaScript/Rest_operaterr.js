function sum(name, ...args){
    var sum =0;
    for(let i in args){
        sum+=args[i];
    }
    console.log(` ${name} ${sum} `);
}
sum("Dheeraj",  "Dheeraj",4,5,5);