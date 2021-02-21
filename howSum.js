const howsum=(targetsum, numbers,memo={})=>{
    if(targetsum in memo) return memo[targetsum];
    if(targetsum===0) return [];
    if(targetsum<0) return null;
    for(let num of numbers){
        const reminder = targetsum-num;
        const reminderResult=howsum(reminder,numbers,memo);
        if(reminderResult !==null){
            memo[targetsum]=[...reminderResult, num];
            return memo[targetsum]
        }

    }
    memo[targetsum]=null;
    return null;
}
console.log(howsum(7,[2,3]))
console.log(howsum(7,[5,3,4,7]))
console.log(howsum(7,[2,4]))
console.log(howsum(300,[7,14]))