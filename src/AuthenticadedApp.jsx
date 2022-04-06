import React, {useState, useEffect} from 'react';
import {useGlobalContext} from './context/GlobalProvider';

const AuthenticatedApp = () => {
  const {user, boards} = useGlobalContext();
  const showLists = (boardId, boardName) => {
    getLists(boardId);
    navigate(`/${boardName}/lists`);
  }

  return (
    <div>
      <h1>Authenticated App</h1>
      {boards.map(board => (
        <div key={board.id} onClick={() => showLists(board.id, board.name)}>
          <h2>{board.name}</h2>
          <p>{board.closed ? 'Closed' : 'Open'}</p>
          <p>{board.color}</p>
          <p>{board.starred ? 'Starred' : 'Not Starred'}</p>
        </div>
      ))}
    </div>
  );
};

export default AuthenticatedApp;
