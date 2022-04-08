import {useBoard} from '../context/BoardProvider';
import List from '../components/boards/List';

const Board = () => {
  console.log(useBoard());
  // const {board, setBoard} = useBoard();
  // console.log(board);

  return (
    <h1>hello board</h1>
    // <div>
    //   <div>
    //     <h1>{board.name}</h1>
    //     <p>{board.starred ? 'Starred' : ''}</p>
    //   </div>
    //   <div>
    //     {board.lists.map((list) => {
    //       <List key={list.id} list={list} />;
    //     })}
    //   </div>
    // </div>
  );
};

export default Board;
