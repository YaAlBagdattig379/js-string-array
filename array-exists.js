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
    let singleMate = myAllFriends[0];
    for(const myUniqueMate of myAllFriends){
        if(myUniqueMate.length > singleMate.length){
            singleMate = myUniqueMate;
        }
    }
    return singleMate;
}
const myClassMates =['monu','panu','dipjol','heroAlam','saderKodu'];
const allMate = classMate(myClassMates);
console.log(allMate);