/* string methods:
split, slice, substr, substring, concate, join,
 */
const anthem = "Amar Sonar Bangla Ami Tomay Balobashi Chirodin Tomar akash Tomar batash Amar Prane  bajay bashi";

// split
const word=anthem.split('Amar');
// console.log(word)


// slice
const slice=anthem.slice(0,-1);
// console.log(slice)\

// substr
const substr=anthem.substr(11,16);
// console.log(substr)

// substring:
const substring=anthem.substring(11,17);
// console.log(substring)

//concat:
const firstName="shariful islam";
const secondName="shihab";
const concatenate=firstName.concat( " "+secondName);
// console.log(concatenate)

// join:
const str=["a", "b", "c", "d", "e"];
const join=str.join('a, ');
console.log(join)
