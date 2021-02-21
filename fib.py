def fib(n):
    if (0<=n):
        if(n<=2):
            return 1
        x=fib(n-1)+fib(n-2)
        return x
fib(7)
