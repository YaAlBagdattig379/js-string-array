// 1. searching example by function and 'for of loop'
function megaFriends(friends){
    let mega = friends[0];
    for(const friend of friends){
        if(friend.length > mega.length){
            mega = friend;
        }
    }
    return mega;
}
const friends = ['jaku','pakukakul','kaku','nakukaku'];
const myBigBuddy = megaFriends(friends) ;
console.log(myBigBuddy);






// 2. searching example by function and 'for of loop'

function megaShopping(goods){
    let shoppingProduct = goods[0];
    for(const tinyProduct of goods){
        if(tinyProduct.length > shoppingProduct.length){
            shoppingProduct = tinyProduct;
        }
    }
    return shoppingProduct;
}
const mySoldProduct = ['potato','onion','carrot','jackfrouit'];
const shopping = megaShopping(mySoldProduct);
console.log(shopping);






// 3. searching example by function and "for of loop"
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
const myClassMates =['monu','panu','dipjol','heroAlam','saderKodu'];
const allMate = classMate(4343432);
console.log(allMate);




//1. use of "indexOf()"how to check a speciifc index Element is available or not in a array?
const allShopping = ['masteredOil','sweet','ladiesFinger','cabage'];
if(allShopping.indexOf('sweet') != -1){
    console.log('this is that area where you can get a lots of varieties sweet')
}


//2. use of "()"how to check a speciifc index Element is available or not in a array?
const allShopping2 = ['masteredOil','sweet','ladiesFinger','cabage'];
if(allShopping2.includes('bbbb')){
    console.log('this is that area where you can get a lots of varieties sweet')
}
else{
    console.log('this is not right!')
}



//3. use  of "concat" how to check a speciifc index Element is available or not in a array?
const firstPage = [1, 3 , 4, 5 , 7]; 
const secondPage = [9, 13 , 14, 15 , 17];
const combinedNumber = firstPage.concat(secondPage);
console.log(combinedNumber);
