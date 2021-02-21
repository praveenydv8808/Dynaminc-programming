      const bestsum=(targetsum, numbers,memo={})=>{
          if (targetsum in memo) return memo[targetsum];
          if(targetsum===0) return [];
          if(targetsum<0) return null;

          let shortestcombination=null;

            for(let num of numbers){
              const remainder = targetsum - num;
              const remaindercombination = bestsum(remainder,numbers,memo);
              if(remaindercombination !==null){
                  const combination=[...remaindercombination,num];
                  if(shortestcombination===null|| combination.length<shortestcombination.length){
                      shortestcombination=combination;
                  }
              }
          }
          memo[targetsum]=shortestcombination;
          return shortestcombination;
      };
//console.log(bestsum(7, [5,3,4,7]));
//console.log(bestsum(8, [2,3,5]));
console.log(bestsum(8, [1,4,5]));
console.log(bestsum(100, [1,,2,5,25]));