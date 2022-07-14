// this is normal final example of sort and reserve 
// this is normal final example of 'sort' and 'reserve'
 


// sort example 
// 1..'sort' normal example.its rules normally work when the digit of index of
// an array becomes  between of only "1" digit except didn't work
const totalSerialNo = [3, 4 ,5 , 6, 1, 7, 8, 9, 2, 4] ;
const respectiveLySerialNo = totalSerialNo.sort();
console.log(respectiveLySerialNo);//o.p >> [1, 2, 3, 4, 4, 5, 6, 7, 8, 9] 

// 2. 'sort' example with in string 
const teamNames = ['heroAlom','badamChacha','palam','chadMama','dinBondhu','hello'];
const sortStirngAsending = teamNames.sort();
console.log(sortStirngAsending);
//o.p >>['badamChacha', 'chadMama', 'dinBondhu', 'hello', 'heroAlom', 'palam']


// 2 A..real 'sort' example especially its rules guided by when  the element of
// index numbers become   above of "1" digit   "this is real fact" of sort;
const totalCarNo = [35, 4 ,51 , 7, 12, 57, 9, 29, 62, 84] ;
const respectiveLyCarNo = totalCarNo.sort(function(a, b){
    return a-b;
});
console.log(respectiveLyCarNo);

// 2 B..real 'sort' example especially its rules guided by when  the element of
// index numbers become   above of "1" digit   "this is real fact" of sort;
const mlaSerialNo = [54, 5 ,3 , 266, 62, 57, 9, 29, 8, 9] ;
const ascendignSerialNo = mlaSerialNo.sort(function(a, b){
    return a-b;
});
console.log(ascendignSerialNo); //o.p >> [3, 5, 8, 9, 9, 29, 54, 57, 62, 266]






// "reverse" normal example 
// 1.. reverse normal example 

const groupMembers = ['badol','kadol','manol','label','seol','general','pentul'];
const choiceSort = groupMembers.reverse();
console.log(choiceSort);
//o.p >> ['pentul', 'general', 'seol', 'label', 'manol', 'kadol', 'badol']



// how to 'reverse' by 'sort' 
const flockBirds = ['heron','crow','pegeon','camelBird','duck','eagle','hock'];
const choiceBirds = flockBirds.sort().reverse();
console.log(choiceBirds);
// o.p >> [ 'pegeon', 'hock', 'heron', 'eagle', 'duck', 'crow', 'camelBird' ]
