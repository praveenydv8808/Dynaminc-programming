var letter = [];
var word = "mycar";
var rword = "";

for (let i=0;i<word.length;i++){
    letter.push(word[i]);
}

for (let j=0;j<word.length;j++){
    rword +=letter.pop(word[j]);

}
console.log(rword)
if(word===rword){
     console.log(word +" is a palindrome.");
}
else{
    console.log(word+" Not a palidrome.")
}