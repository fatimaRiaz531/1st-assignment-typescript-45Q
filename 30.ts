//30. 	Hello Admin: Make a array

let users : string [] = ['sana','babar','saba','taha','admin']

for(let user of users){
    if (user === "admin"){
        console.log("hello admin, would you like to see a status report?")
    }
    else{
        console.log(`Hello ${user}, 'thank you for logging in again.'`)
    }
}