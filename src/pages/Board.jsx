import {useBoard} from '../context/BoardProvider';
import List from '../components/boards/List';
import {useParams} from 'react-router-dom';
import {useEffect} from 'react';

const Board = () => {
  const {id} = useParams();
  const {board, setBoard, getBoard} = useBoard();
  console.log(board);
  useEffect(() => {
    getBoard(id);
  }, [id]);

  return (
    board ?
      <div>
        <div>
          <h1>hello {board.name}</h1>
          <p>{board.starred ? 'Starred' : ''}</p>
        </div>
        <div>
          {board.lists.map(list => <List key={list.id} list={list} />)}
        </div>
      </div> :
      <h1>Loading...</h1>
  );
};

export default Board;
