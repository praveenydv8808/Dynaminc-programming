const cansum=(targetsum, number,memo={})=>{
    if(targetsum in memo) return memo[targetsum];
    if(targetsum === 0) return true;
    if(targetsum < 0) return false;
    for(let num of number){
        const reminder=targetsum-num;
        if(cansum(reminder, number,memo)===true){
            memo[targetsum]=true;
            return true;
       }
    }
    memo[targetsum]=false;
    return false;
};
console.log(cansum(6, [2,3]))
console.log(cansum(7,[2,3,4]))
console.log(cansum(7,[2,3,7]))
console.log(cansum(7,[3,3,3]))