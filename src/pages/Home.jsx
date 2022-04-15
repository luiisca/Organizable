import {useEffect} from 'react';
import {Link} from 'react-router-dom';
import useFetchGet from '../hooks/useFetchGet';
import {getBoards} from '../services/boards-service';

export default function Home() {
  // TODO: memoize this (currently executing 3 times)
  const {data: boards} = useFetchGet({action: getBoards});

  return (
    <div className="Home">
      <h1>Home</h1>
      <p>
        This is the home page.
      </p>
      <div>
        {boards?.map(board => (
          <div key={board.id}>
            <Link to={`/boards/${board.id}`}>
              <h2>{board.name}</h2>
              <p>{board.closed ? 'Closed' : 'Open'}</p>
              <p>{board.color}</p>
              <p>{board.starred ? 'Starred' : 'Not Starred'}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
