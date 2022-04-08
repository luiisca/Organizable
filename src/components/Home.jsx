import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import useFetchGet from '../hooks/useFetchGet';
import {getBoards} from '../services/boards-service';

export default function Home() {
  // return <h1>Hello Home!</h1>
  // console.log(useFetchGet);
  const {data: boards} = useFetchGet({action: getBoards});
  console.log(boards);

  return (
    <div className="Home">
      <h1>Home</h1>
      <p>
        This is the home page.
      </p>
      <div>
        <h1>Authenticated App</h1>
        {boards.map(board => (
          <div key={board.id} onClick={() => showLists(board.id)}>
            <h2>{board.name}</h2>
            <p>{board.closed ? 'Closed' : 'Open'}</p>
            <p>{board.color}</p>
            <p>{board.starred ? 'Starred' : 'Not Starred'}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
