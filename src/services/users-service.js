import {tokenKey, userKey} from "../config";
import apiFetch from "./api-fetch";

export async function getUser() {
  const {_token, ...user} = await apiFetch("users");

  return user;
}

export async function createUser(newUser) {
  const {token, ...user} = await apiFetch("users", {body: newUser});
  localStorage.setItem(tokenKey, token);
  localStorage.setItem(userKey, JSON.stringify(user));

  return user;
}

export async function updateUser(data) {
  const {_token, ...user} = await apiFetch("users", {
    body: data,
    method: "PATCH",
  });

  return user;
}

export async function destroyUser() {
  await apiFetch("users", {method: "DELETE"});
  localStorage.removeItem(tokenKey);
  localStorage.removeItem(userKey);
}
