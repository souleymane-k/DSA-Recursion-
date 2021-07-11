function countSheep (input){
    if(input === 0){
        console.log("All sheep jumped over the fence");
        return 
    }
    console.log(input + ": Another sheep jumps over the fence");
    countSheep(input-1);

}
countSheep(3);