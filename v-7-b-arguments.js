                       
                 //  first example of string using "arguments"
                 //  first example of string using "arguments"
                 //  first example of string using "arguments"
// 1,,,,,,using  example by "string" 
// 1,,,,,,using  example by "string" 
// 1,,,,,,using  example by "string" 
function fullName(first,second){
    // console.log(arguments);
    // console.log(arguments[2]);
    const name = first +" "+ second ;
    return name;
}
const myName = fullName('md',"rabiul","miah",'molla',);
// console.log(myName);


                 //  second example of string using "arguments"
                 //  second example of string using "arguments"
                 //  second example of string using "arguments"

// 2,,,,,,using  example by "string" 
// 2,,,,,,using  example by "string" 
// 2,,,,,,using  example by "string" 
function wholeName(){
    // console.log(arguments);
    // console.log(arguments[2]);
    let firtsOne = 0;
    for(const part of arguments){
        firtsOne = firtsOne + part + " "
    }
    return firtsOne;
}
// const myWholeName = wholeName('md',"rabiul","miah",'molla',);
const myWholeName = wholeName('mui',"choto","belar",'name','chilo','supervisor');
// console.log(myWholeName);



                 //  third example of number using "arguments"
                 //  third example of number using "arguments"
                 //  third example of number using "arguments"
                 //  third example of number using "arguments"

//  3,,,,,,using  example by "number" 
//  3,,,,,,using  example by "number" 
//  3,,,,,,using  example by "number" 
//  3,,,,,,using  example by "number" 

// 1....
function studentsRoll(mantu){

    let roll = 0;
    for(const number of arguments){
        roll = roll + number;
    }
    return roll;
}
const wholeClass = studentsRoll(21,32,52,1,44,75,4,4)
// console.log(wholeClass);

// 2....
function serialNumbers(group){

    let serial = 0;
    for(const number of arguments){
        serial = serial + number;
    }
    return serial;
}
const teamMates = serialNumbers(21,32,52,34,3,4,3,43,4,34,34,3,43,4);
console.log(teamMates);