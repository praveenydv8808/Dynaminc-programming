const CanSum =(target, numbers)=>{
    const table = Array(target+1).fill(false);
    

    table[0]=true;

    for(let i=0; i<numbers.length; i++){

        if( table[i] === true){

            for( let num of numbers){

             table[i + num]= true;
            
            }
        }
    }
    return table[target];
}
console.log(CanSum(7,[5,4,3]));
console.log(CanSum(7,[5,4,3,7]));
console.log(CanSum(8,[2,5,3]));
console.log(CanSum(300,[7,14]));