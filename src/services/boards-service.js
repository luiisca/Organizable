import apiFetch from "./api-fetch";

export const getBoards = () => {
  return apiFetch("boards");
}

export const showBoard = (id) => {
  return apiFetch(`boards/${id}`);
}

export const createBoard = (board) => {
  return apiFetch("boards", {
    body: JSON.stringify(board),
  });
}

export const updateBoard = (board) => {
  return apiFetch(`boards/${board.id}`, {
    method: "PATCH",
    body: JSON.stringify(board),
  });
}

export const destroyBoard = (id) => {
  return apiFetch(`boards/${id}`, {
    method: "DELETE",
  });
}
