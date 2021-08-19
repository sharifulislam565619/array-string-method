
// function adding multiple number by arguments:
function sumNum() {
    let sum = 1;
    arguments;

    for (const num of arguments) {
        sum *= num;
    }

    return sum;
}

const addition = sumNum(10, 20, 40, 50);
// console.log(addition);


//function multiple parameter adding by arguments:
function nameAdding(firstName,secondName) {
    // return firstName+" "+secondName;
    let myFullName="";
    for(const name of arguments){
myFullName+=name+" ";
    }
    return myFullName;
}
const fullName=nameAdding("shariful","islam","shihab");
console.log(fullName)
