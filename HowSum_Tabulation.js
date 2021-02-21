const howSum =(targetSum, numbers)=>{
    const table = Array(targetSum+1).fill(null);
    
    table[0]=[];

    for(let i = 0;i<=targetSum;i++){

        if(table[i] !==null){

            for(let num of numbers){

                table[i+num] = [...table[i],num];
            }
        }
    }
    return table[targetSum];
}
console.log(howSum(7,[5,4,3]));
console.log(howSum(7,[5,4,3,7]));
console.log(howSum(8,[2,5,3]));
console.log(howSum(300,[7,14]));