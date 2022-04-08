import {useState, useEffect} from 'react';
import {getBoards} from '../services/boards-service';

const useFetchGet = ({action, payload = null}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  useEffect(async () => {
    setLoading(true);
    try {
      const res = await action(payload);
      setData(res);
    } catch (e) {
      setError(e);
    }
  }, [data]);
}

export default useFetchGet;
