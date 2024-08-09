//32. checking user names
let current_users = ['saba', 'aisha', 'saima', 'rahat', 'raza'];
let new_users = ['fawad', 'jawad', 'user7', 'admin', 'user9'];
new_users.forEach((newUser) => {
    if (current_users.some((current_user) => current_user.toLocaleLowerCase() === newUser.toLocaleLowerCase())) {
        console.log(`${newUser}bwill need to enter a new username.`);
    }
    else {
        console.log(`${newUser} is available.`);
    }
});
export {};
