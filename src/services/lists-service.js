import apiFetch from "./api-fetch";

export const createList = (list, boardId) => {
  return apiFetch(`boards/${boardId}/lists`, {
    body: JSON.stringify(list),
  });
};

export const updateList = (list, boardId) => {
  return apiFetch(`boards/${boardId}/lists/${list.id}`, {
    method: "PATCH",
    body: JSON.stringify({name: list.name}),
  });
};

export const destroyList = (list, boardId) => {
  return apiFetch(`boards/${boardId}/lists/${list.id}`, {
    method: "DELETE",
  });
};
