const canconstruct=(target,wordBank,memo={})=>{
    if(target in memo) return true;
    if(target==='') return true;

    for(let word of wordBank){
        if(target.indexOf(word)===0){
            const suffix=target.slice(word.length)
            if(canconstruct(suffix,wordBank,memo)===true){
                memo[target]=true;
                return true;

            }
        }
    }
    memo[target]=false;
    return false;
};
console.log(canconstruct('abcdef',["abc","ab","cd","def","abcd"]));
console.log(canconstruct('skateboard',["bo","rd","ate","t","ska","sk","boar"]));
console.log(canconstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef',["ee","eeee","eeeeeeeeeee","eeeeee","eeeeeeeeeeeee"]));