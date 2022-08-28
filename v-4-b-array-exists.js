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
// const myCalling = friendList(schoolMates);
const myCalling = friendList(12324343);
// console.log(myCalling);








// use of "indexOf"tofind out specific index elements
// use of "indexOf"tofind out specific index elements
// use of "indexOf"tofind out specific index elements
// use of "indexOf"tofind out specific index elements

const allFriends = ['madhu','ghedu','modeya','laltuMiya'];
undefined
if(allFriends.indexOf("modeya")){
    console.log("hello modeya you are welcome in here ! bro")
}