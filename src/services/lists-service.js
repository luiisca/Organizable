import apiFetch from "./api-fetch";

export const createList = (list) => {
  return apiFetch(`boards/${}/lists`, {
    method: "POST",
    body: JSON.stringify(list),
  });
};
