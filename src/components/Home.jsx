import {useEffect} from 'react';
import {Link} from 'react-router-dom';
import useFetchGet from '../hooks/useFetchGet';
import {getBoards} from '../services/boards-service';

export default function Home() {
  // return <h1>Hello Home!</h1>
  // console.log(useFetchGet);
  // TODO: memoize this (currently executing 3 times)
  const {data: boards} = useFetchGet({action: getBoards});
  // console.log('2)', boards);

  return (
    <div className="Home">
      <h1>Home</h1>
      <p>
        This is the home page.
      </p>
      <div>
        {/*{console.log('3) hello home component')}*/}
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
