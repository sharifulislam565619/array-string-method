// Uppercase to lowercase:
 const anthem = "Amar Sonar Bangla Ami Tomay Balobashi Chirodin Tomay akash Tomar batash Amar Prane Oma Amar Prane bajay bashi ";

const lowerCase = anthem.toLocaleLowerCase()
const upperCase = anthem.toUpperCase()
console.log(lowerCase, upperCase) 




// Search for specific word;

const products=[
    "Samsung m20 mobile phone",
    "hp core i5 6th generation laptop",
    "A4tech 600 prices laptop keyboard",
    "Ranola tip boll pen",
    "some study book",
    "fresh drinking Water",
    "Kiam rice cocker"
]

const userInput="Book";
const output=[];

// strategy 1:
 for(const product of products){
     if(product.toLowerCase().indexOf(userInput.toLowerCase()) != -1){
         output.push(product)
     }
}

console.log(output) 

// strategy 2:
for(const product of products){
    if(product.toLowerCase().includes(userInput.toLowerCase())){
        output.push(product)
    }
}
console.log(output) 

// strategy 3:
 for(const product of products){
    if(product.toLowerCase().startsWith(userInput.toLowerCase())){
        output.push(product)
    }
}
console.log(output) 

//strategy 4:
for(const product of products){
    if(product.toLowerCase().endsWith(userInput.toLowerCase())){
        output.push(product)
    }
}
console.log(output)