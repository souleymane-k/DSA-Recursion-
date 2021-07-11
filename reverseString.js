function reverseString(string){
   
    if(string.length === 1){
        return string;
    }
    
    return string.slice(-1) + reverseString(string.slice(0, -1));
    // return string.slice(-1)
    // return reverseString(string.slice(0, -1)); H
    // return string.slice(-1); O

}
 let string = "Hello";
 console.log(reverseString(string));