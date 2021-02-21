const allCounstruct=(target, wordBank)=>{
    
    if(target==="") return [[]];
    const result =[];
    for(let word of wordBank){
        if(target.indexOf(word)===0){
            const suffix = target.slice(word.length);
            const suffixWays= allCounstruct(suffix, wordBank);
            const targetWays = suffixWays.map(way=>[word, ...way]);
            result.push(...targetWays);
        }
    }
    
    return result;
}

console.log(allCounstruct('abcdef',["abc","ab","cd","def","abcd"]));
console.log(allCounstruct('skateboard',["bo","rd","ate","t","ska","sk","boar"]));
console.log(allCounstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef',["ee","eeee","eeeeeeeeeee","eeeeee","eeeeeeeeeeeee"]));