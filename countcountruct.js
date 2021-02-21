const countcounstruct=(target ,wordBank,memo)=>{

    if(target in memo) return memo[target];
    if(target ==='') return 1;

    let counttotal=0;

    for(let word of wordBank){
        if(target.indexof(word)===0){
            const numOFways=countcounstruct(target.slice(word.length),wordBank,memo)
            counttotal +=numOFways;
        }
    }
    memo[target]=counttotal;
    return counttotal;
}
console.log(countcounstruct("abcdef",["abc","ab","cd","def","abcd"]));
console.log(countcounstruct('skateboard',["bo","rd","ate","t","ska","sk","boar"]));
console.log(countcounstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef',["ee","eeee","eeeeeeeeeee","eeeeee","eeeeeeeeeeeee"])); 