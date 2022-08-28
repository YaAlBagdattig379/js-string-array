// 1.. example as number statesment which is normal example
// 1.. example as number statesment which is normal example
function studentNumbers(abz, xyz){
    debugger;
    const totalStudents = abz + xyz;
    return totalStudents;
}
const presentStudents = studentNumbers(21 , 21 ,43  ,55)
console.log(presentStudents);// op>> 42







//**
//   contro a lots of parameters by "arguments" technique
//   contro a lots of parameters by "arguments" technique
//   contro a lots of parameters by "arguments" technique
//   contro a lots of parameters by "arguments" technique
//   contro a lots of parameters by "arguments" technique
//   contro a lots of parameters by "arguments" technique
//   contro a lots of parameters by "arguments" technique
//   contro a lots of parameters by "arguments" technique



// 2 B..,,example of "unlimited parameters to a function using 'arguments'" technique for number
// 2 B..,,example of "unlimited parameters to a function using 'arguments'" technique for number
// 2 B..,,example of "unlimited parameters to a function using 'arguments'" technique for number
function myRollWas(classV,classVi ,classVii, classViii){
    let roll = 0;
    for(const one of arguments){
        roll = one + roll;
    }
    return roll;
}
const myChoiceNumbers = myRollWas(6,9,20,26,19,100);
// console.log(myChoiceNumbers);// o.p >> 180
 




// 2 B..,,example of "unlimited parameters to a function using 'arguments'" technique for string
// 2 B..,,example of "unlimited parameters to a function using 'arguments'" technique for string
// 2 B..,,example of "unlimited parameters to a function using 'arguments'" technique for string
function getFullName(first , last){
    let fullName = " ";
    for(const part of arguments){
        //fullName = fullName + part;
         fullName = fullName + part + " ";
    }
    return fullName;
}
const name = getFullName('ghugu','bogula','saros','gudurkani','khokoPeCha');
// console.log(name); 
