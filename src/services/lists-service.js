import apiFetch from "./api-fetch";

export const createList = (details, boardId) => {
  return apiFetch(`boards/${boardId}/lists`, {
    body: details,
  });
};

export const updateList = (list, boardId) => {
  return apiFetch(`boards/${boardId}/lists/${list.id}`, {
    method: "PATCH",
    body: {name: list.name},
  });
};

export const destroyList = (list, boardId) => {
  return apiFetch(`boards/${boardId}/lists/${list.id}`, {
    method: "DELETE",
  });
};
