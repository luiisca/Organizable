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

      //CARDS
      let newCards = [];
      board.lists.forEach(list => (
        list.cards.forEach(card =>
          newCards.push(card)
        ))
      );
      newCards = newCards.reduce((acc, card) => ({
        ...acc,
        [`card-${card.cardId}`]: card
      }), {});

      //LISTS
      let newLists = [];
      board.lists.forEach(list => {
        newLists.push({
          ...list,
          cardOrder: list.cards.map(card => `card-${card.cardId}`)
        });
        delete newLists[newLists.length - 1].cards;
      });

      newLists = newLists.reduce((acc, list) => ({
        ...acc,
        [`list-${list.listId}`]: list,
      }), {});

      const listOrder = Object.keys(newLists);

      //BOARD
      const newBoard = {
        ...board,
        cards: newCards,
        lists: newLists,
        listOrder
      };
      //BOARD => {
      // cards: {
      //  card-1: {...},
      //  card-2: {...},
      // },
      // lists: {
      //  list-1: {..., cardOrder: [card-1, card-2]},
      //  list-2: {..., cardOrder: [card-4, card-5]},
      // },
      // listOrder: [list-1, list-2]
      //}
      //
      // console.log(newBoard);
      setBoard(newBoard);
    } catch (error) {
      setError(error);
    }
  };

  return (
    <BoardContext.Provider
      value={{
        board,
        setBoard,
        loading,
        error,
        getBoard,
      }}
    >
      {children}
    </BoardContext.Provider>
  )
}

export const useBoardContext = () => useContext(BoardContext);

export default BoardProvider;
