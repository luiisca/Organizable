import {tokenKey, userKey} from "../config";
import apiFetch from "./api-fetch";

export async function login(credentials) {
  const {token, ...user} = await apiFetch("login", {
    body: credentials,
  });

  localStorage.setItem(tokenKey, token);
  localStorage.setItem(userKey, JSON.stringify(user));

  return user;
}

export async function logout() {
  await apiFetch("logout", {method: "DELETE"});
  localStorage.removeItem(tokenKey);
  localStorage.removeItem(userKey);
}
