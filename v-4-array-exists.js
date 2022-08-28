// 1. searching example by function and 'for of loop'
// 1. searching example by function and 'for of loop'
// 1. searching example by function and 'for of loop'
function megaFriends(friends){
    let mega = friends[0];
    for(const friend of friends){
        if(friend.length > mega.length == true){
            mega = friend;
        }
    }
    return mega;
}
const friends = ['jaku','pakukakul','kaku','nakukakuPagil'];
const myBigBuddy = megaFriends(friends) ;
// console.log(myBigBuddy);

// 1-B. searching example by function and 'for of loop'
// 1-B. searching example by function and 'for of loop'
function studentName(student){
    let morFriend = [0];
    for(const name of student){
        if(name.length > morFriend.length){
            morFriend = name;
        }
    }
    return morFriend;
}
const friendTeam = ["jake",'meghua','monu','harish','kriyanBablu','babluKerketa']
const lateNight = studentName(friendTeam);
// console.log(lateNight);








// 2. searching example by function and 'for of loop'
// 2. searching example by function and 'for of loop'
// 2. searching example by function and 'for of loop'
// 2. searching example by function and 'for of loop'

function megaShopping(goods){
    let shoppingProduct = goods[0];
    for(const tinyProduct of goods){
        if(tinyProduct.length > shoppingProduct.length){
            shoppingProduct = tinyProduct;
        }
    }
    // return shoppingProduct;
}
const mySoldProduct = ['potato','onion','carrot','jackfrouit'];
const shopping = megaShopping(mySoldProduct);
// console.log(shopping);

// 2.B searching example by function and 'for of loop'
// 2.B searching example by function and 'for of loop'
function myChoseNumer(Numbers){
    let chose = [0];
    for(const number of Numbers){
        if(number > chose){
            chose = number;
        }
    }
    return chose;
}
const myWholeClassRoom = [23,5,622,6235,12,16,2,888,202208];
const sendingNumber = myChoseNumer(myWholeClassRoom);
// console.log(sendingNumber);







// 3. searchin wanting index by "array cheching"
// 3. searchin wanting index by "array cheching"
// 3. searchin wanting index by "array cheching"
// 3. searchin wanting index by "array cheching"
// 3. searchin wanting index by "array cheching"
function classMate(myAllFriends){
    if(Array.isArray(myAllFriends) == false){
        return 'this is not a array'
    }
    let singleMate = myAllFriends[0];
    for(const myUniqueMate of myAllFriends){
        if(myUniqueMate.length > singleMate.length){
            singleMate = myUniqueMate;
        }
    }
    return singleMate;
}
// const myClassMates =['monu','panu','dipjol','heroAlam','saderKodu'];
const allMate = classMate(4343432);
// const allMate = classMate(myClassMates);
 console.log(allMate);

// 3. searchin wanting index by "array cheching"
// 3. searchin wanting index by "array cheching"
function friendList(allFriendNumber){
    if(Array.isArray(allFriendNumber) == false){
        console.log("this is not a string array ! so sad")
    }
    let closeFriend = [0];
    for(const myFriend of allFriendNumber)
    if( myFriend.length > closeFriend.length){
        closeFriend = myFriend;
    }
    return closeFriend;
}
const schoolMates = ['falguni','baisakhi','josti','srabon','vaddro','asadForRain'];
const myCalling = friendList(34234);
const myCallingSecond = friendList(34234);
// console.log(myCalling);
// console.log(myCallingSecond);







//1. use of "indexOf()"how to check a speciifc index Element is available or not in a array?
//1. use of "indexOf()"how to check a speciifc index Element is available or not in a array?
//1. use of "indexOf()"how to check a speciifc index Element is available or not in a array?//toFindout specific index element is availble or not to in here
const allShopping = ['masteredOil','sweet','ladiesFinger','cabage'];
if(allShopping.indexOf('kalu') != -1){
    console.log('this is that area where you can get a lots of varieties sweet')
}
//2. use of "indexOf()"how to check a speciifc index Element is available or not in a array?//toFindout specific index element is availble or not to in here
const allFriends = ['madhu','ghedu','modeya','laltuMiya'];
if(allFriends.indexOf("modeya")){
    console.log("hello modeya you are welcome in here ! bro")
}








//2. use of "()"how to check a speciifc index Element is available or not in a array?
//2. use of "()"how to check a speciifc index Element is available or not in a array?
//2. use of "()"how to check a speciifc index Element is available or not in a array?
const allShopping2 = ['masteredOil','sweet','ladiesFinger','cabage'];
if(allShopping2.includes('bbbb')){
    // console.log('this is that area where you can get a lots of varieties sweet')
}
else{
    // console.log('this is not right!')
}
// 22. use of "()"how to check a speciifc index Element is available or not in a array?




//3. use  of "concat" how to check a speciifc index Element is available or not in a array?
const firstPage = [1, 3 , 4, 5 , 7]; 
const secondPage = [9, 13 , 14, 15 , 17];
const combinedNumber = firstPage.concat(secondPage);
// console.log(combinedNumber);
