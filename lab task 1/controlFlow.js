let age = 16;
let status;

switch(true){
    case age >= 18:
        status = "adult";
        break;
    case age >= 13:
        status = "teenager";
        break;
    default:
        status = "minor";
}

//console.log(status);

let x = [1, 3, 4, 5, 6, 7, 8];
/*
for(let i =0; i<x.length; i++){
    //console.log(x[i]);
}
let i=0;
while(i < x.length){
    //console.log(x[i]);
    i++;
}
let j = 0;
do{
    //console.log(x[j]);
    j++;
}while(j < x.length);
*/

for(let i in x) {
    console.log(x[i]); // iterate over the keys of object i = keys of object
}
for(let i of x) {
    console.log(i); // iterate over the values of object i = values of object
}