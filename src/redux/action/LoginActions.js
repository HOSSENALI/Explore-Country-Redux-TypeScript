import { useDispatch } from "react-redux";
import getUserData from "../../components/Login/userData";

export function SetUserName(value) {
    return {
        type: "SET_INPUT_USER_NAME",
        payload: value,
    }
}
export function SetPassword(value) {
    return {
        type: "SET_PASSWORD",
        payload: value,
    }
}

export function checkLogin(username, password) {
    let data = {
        isLoggedIn: false,
        data: {}
    };
   
    const userData = getUserData();
     
    userData.forEach(user => {
        if (user.username == username && user.password == password) {
            data.isLoggedIn = true;
            data.data = user;
            // console.log(data.data);
        }
    });
    // console.log("hi",userData);
    return data;
}

export function UserLogin(InputUserName, InputPassword) {
    // const dispatch = useDispatch();
    const loginResponse = checkLogin(InputUserName, InputPassword);
    console.log("username from action",InputPassword);
    if (loginResponse.isLoggedIn) {
        //   setError("");
        console.log("hi",loginResponse);
        localStorage.setItem("userData", JSON.stringify(loginResponse.data));
        window.location.href = "/";

        return {
            type: "SET_IS_LOGGED",
            payload: loginResponse.data.isLoggedIn,
        }
    }
    else {

        return {
            type: "SET_ERROR",
        }

    }
}

export function SetLogOut() {
    return {
        type: "LOG_OUT",  
    }
}




// export function getUserData() {
//     const userData = JSON.parse(localStorage.getItem("userData")) || undefined;
//     if (typeof userData != "undefined") {
//         if (userData.username && userData.username.length > 0) {
//             window.location.href = "/";
//         }
//     }
// }
