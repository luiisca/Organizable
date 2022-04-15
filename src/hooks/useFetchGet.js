import {useState, useEffect} from 'react';

const useFetchGet = ({action, payload = null}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await action(payload);
        setData(result);
        setLoading(false);
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
