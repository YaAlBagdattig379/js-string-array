// these are examples for "arguments alots of in"
// these are examples for "arguments alots of in"
// these are examples for "arguments alots of in"
// 1.. example as number statesment which is normal not unique
function studentNumbers(abz, xyz){
    const totalStudents = abz + xyz;
    return totalStudents;
}
const presentStudents = studentNumbers(21 , 21 ,43  ,55)
console.log(presentStudents);// op>> 42


// 2 A.. example as number statesment which is 'unique' this are called "arguments 
//technique" in function to get exact arguments demanted by function";
function myRollWas(classV,hello ,gello, mello){
    let roll = 0;
    for(const one of arguments){
        roll = one + roll;
    }
    return roll;
}
const myChoiceNumbers = myRollWas(6,9,20,26,19,100);
console.log(myChoiceNumbers);// o.p >> 180
 


// 2 B...example as which all of statement will be "stirng" same technique
function getFullName(first , last){
    let fullName = " ";
    for(const part of arguments){
        //fullName = fullName + part;
         fullName = fullName + part + " ";
    }
    return fullName;
}
const name = getFullName('ghugu','bogula','saros','gudurkani','khokoPeCha');
console.log(name); 
//o.p without single space >> ghugubogulasarosgudurkanikhokoPeCha 
//o.p with single space >>  ghugu bogula saros gudurkani khokoPeCha