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
    data: {}
  };
  const userData = getUserData();
  
  // console.log(userData);
  userData.forEach(user => {
    if (user.username ==username && user.password ==password) {
      data.isLoggedIn = true;
      data.data = user;
      if (user.role != null) {
        const roleID = user.role.id;
        const permissionsData = getRolePermissionsData();
        for (let index = 0; index < permissionsData.length; index++) {
          const element = permissionsData[index];

          if (element.id === roleID) {
            let permissions = [];
            element.permissions.forEach(perm => {
              permissions.push(perm.name);
            });
            data.data.permissions = permissions;
          }
        }
      } else {
        data.data.permissions = [];
      }
    }
  });
  return data;
}