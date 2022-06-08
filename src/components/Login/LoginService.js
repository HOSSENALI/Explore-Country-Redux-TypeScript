import getUserData from "./userData";
import getRolePermissionsData from "./rolePermissionsData";

/**
 * checkLogin function
 *
 * @param {object * @return {bool} return true if logged in, else return false
 */
export default function checkLogin(username,password) {
  let data = {
    isLoggedIn: false,
    data:{}
  };
  const userData = getUserData();
  // console.log(userData);
  userData.forEach(user => {
    if (user.username ==username && user.password ==password) {
      data.isLoggedIn = true;
      data.data = user;
    }
  });
  return data;
}