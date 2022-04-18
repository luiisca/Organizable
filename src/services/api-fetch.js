import {tokenKey, BASE_URI, userKey} from "../config.js";

export default async function apiFetch(
  endpoint,
  {method, headers, body} = {}
) {
  const token = localStorage.getItem(tokenKey);
  const userId = JSON.parse(localStorage.getItem(userKey))?.id;

  if (endpoint == 'users' && userId && !body || method === "DELETE") {
    endpoint = `users/${userId}`;
  }

  if (token) {
    headers = {
      Authorization: `Token token=${token}`,
      ...headers,
    };
  }

  if (body) {
    headers = {
      "Content-Type": "application/json",
      ...headers,
    };
  }

  const config = {
    method: method || (body ? "POST" : "GET"),
    headers,
    body: body ? JSON.stringify(body) : null,
  };
  // console.log(config);

  const response = await fetch(BASE_URI + endpoint, config);

  let data;
  if (!response.ok) {
    try {
      data = await response.json();
    } catch (error) {
      throw new Error(response.statusText);
    }
    if (data.errors) throw new Error(JSON.stringify(data.errors));
    throw new Error(JSON.stringify(data))
  };

  try {
    data = await response.json();
  } catch (error) {
    data = response.statusText;
  }

  return data;
}
