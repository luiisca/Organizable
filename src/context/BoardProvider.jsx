import {useContext, createContext, useState, useEffect} from 'react';
import apiFetch from '../services/api-fetch';
import {showBoard} from '../services/boards-service';
const BoardContext = createContext();

const BoardProvider = ({children}) => {
  const [board, setBoard] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getBoard = async (boardId) => {
    // setLoading(true);
    try {
      const board = await showBoard(boardId);
      setBoard(board);
    } catch (error) {
      setError(error);
    }
  };

  return (
    <BoardContext.Provider
      value={{
        board,
        loading,
        error,
        getBoard,
      }}
    >
      {children}
    </BoardContext.Provider>
  )
}

export const useBoard = () => useContext(BoardContext);


export default BoardProvider;
