// 🔹 Define Interface (just an object with method names)
const UserInterface = {
    login: "function",
    logout: "function"
};

// 🔹 Class implementing interface
class User {
    login() {
        console.log("User logged in");
    }

    logout() {
        console.log("User logged out");
    }
}

// 🔹 Function to check interface
function checkInterface(obj, interfaceObj) {
    for (let key in interfaceObj) {
        if (typeof obj[key] !== interfaceObj[key]) {
            console.log(`Method ${key} is missing!`);
            return false;
        }
    }
    return true;
}

// 🔹 Usage
const user = new User();

if (checkInterface(user, UserInterface)) {
    user.login();
    user.logout();
} else {
    console.log("Interface not implemented properly");
}