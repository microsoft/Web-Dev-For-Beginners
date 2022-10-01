/*
write a isValidPassword function.
accepts two arguments: password and username
password must:
- be at least 8 characters
- can't contain spaces
- can't contain the username
if all requirements are met, return true, otherwise false

isValidPassword('89Fjjlnms','dogluvr'); // true
*/

function isValidPassword(password, username){
    const tooShort = password.length<8;
    const containspace = password.indexOf(' ')!==-1;
    const containusername = password.indexOf(username)!== -1;
    if(tooShort || containspace || containusername){
        return false;
    }
    return true;
}

