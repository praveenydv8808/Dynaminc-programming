const fib=(n,memo={})=>{
    if(n in memo) return memo[n];
    if(n<=2) return 1;
    memo[n]=fib(n-1)+fib(n-2);
    return memo[n];
};
console.log(fib(6))
console.log(fib(7))
console.log(fib(8))
console.log(fib(18))
console.log(fib(19))
console.log(fib(25))
