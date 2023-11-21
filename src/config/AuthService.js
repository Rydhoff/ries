import { jwtDecode } from "jwt-decode";

const key = 'token';

export const login = (token) => {
  localStorage.setItem(key, token);
};

export const logout = () => {
  localStorage.removeItem(key);
};

export const getToken = () => {
  return localStorage.getItem(key);
};

export const isAuthenticated = () => {
  const token = getToken();
  if(token) {
    const currentDate = new Date();
    if(jwtDecode(token).exp * 1000 < currentDate.getTime()) {
      // expired token
      console.log(jwtDecode(token))
      return false
    } else { 
      // valid token
      console.log(jwtDecode(token))
      return true
     }
  }
};