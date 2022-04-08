import {useState, useEffect} from 'react';
import {getBoards} from '../services/boards-service';

const useFetchGet = ({action, payload = null}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // console.log('1) inside useFetchGet');
  useEffect(() => {
    const fetchData = async () => {
      try {
        // console.log('4) useEffect inside useFetchGet');
        // console.log('5) loading to true', loading);
        const result = await action(payload);
        setData(result);
        setLoading(false);
        // console.log('6) data set to res', data
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData()
      .catch(console.log);
  }, []);

  return {data, loading, error};
}

export default useFetchGet;
