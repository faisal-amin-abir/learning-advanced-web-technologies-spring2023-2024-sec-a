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
console.log(status);