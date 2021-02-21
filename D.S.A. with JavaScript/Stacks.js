//Oprations on Stack.
//push,pop,peek,length

//Creating Stack

var Stack = function(){
    this.count = 0;
    this.storage={};

    //Adding value onto end of the Stack
    this.push =function(value){
        this.storage[this.count]=value;
        this.count++;
    }


 //Removes and return the value on end of the stack
 this.pop=function(){
     if(this.count===0) return undefined;
     
     this.count--;
     var result =this.storage[this.count];
     delete this.storage[this.count];
     return result;
    }
 //return the last value of the stack   
 this.peek = function(){
     return this.storage[this.count-1];

 }
 this.length=function(){
     return this.count;
 }
}
var myStack=new Stack
myStack.push(1)
myStack.push(3)
myStack.push(2)
console.log(myStack.pop())
console.log(myStack.peek())
console.log(myStack.length())
