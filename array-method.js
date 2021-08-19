// some array method:

function getFriends(friends) {
    //check the array
    if(Array.isArray(friends)==false){
      return "please input array"
    }
    let output=friends[0]
    for(const friend of friends){
        if(output.length<friend.length){
            output=friend
        }
    }
    return output;
}
const friends=["rahim", "karim","jabbar","tamanna","habul"]
const bigBuddy=getFriends(friends);
// console.log(bigBuddy)

//indexOf
if(friends.indexOf("karim") != -1){
    console.log("present sir")
}

// includes:

if(friends.includes("tamanna")){
    console.log("i am present sir")
}