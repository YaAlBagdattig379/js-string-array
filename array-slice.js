// slice() in js 
//1... this is array-slice of js 
const studentsNumber = [2,3,4,5,7,6,8,9];
const myChoice = studentsNumber.slice(3,5);
 console.log(myChoice);
 console.log(studentsNumber);

//2... this is array-slice of js 
const studnsNumber = [3,34,64,75,86,7,6,8,9];
const ownChoice = studnsNumber.slice(4,8);
 console.log(ownChoice);
 console.log(studnsNumber);





// splice() in js  
//1... this is array-splice of js 
const poductsNumbers = [2,3,4,5,7,34,6,8,9];
const restricsNumbers = poductsNumbers.splice(3,2,222,333);
 console.log(restricsNumbers);
 console.log(poductsNumbers);



//2... this is array-splice of js 
const packagNumbers = [24,53,64,25,47,34,6,8,9];
const restricsPackagNumbers = packagNumbers.splice(5,2,852,683);
 console.log(restricsPackagNumbers);
 console.log(packagNumbers);



//3... this is array-splice of js 
const groupNumbers = [244,533,634,253,447,343,62,82,93];
const restricGroupNumbers = groupNumbers.splice(4,4,852,683,543,363,63);
console.log(restricGroupNumbers);
 console.log(groupNumbers);