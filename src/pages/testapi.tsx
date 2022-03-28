import { useState, useEffect } from 'react';

import { AxiosError } from 'axios';

import http from '@/utils/http';

function Testapi() {
  const [error, setError] = useState<AxiosError | undefined>(undefined);
  const [data, setData] = useState<any | undefined>(undefined);

  // component did mounted
  useEffect(() => {
    const fetchPosts = async () => {
      const [errorRes, dataRes] = await http.get('/posts/1');
      setError(errorRes);
      setData(dataRes);

      // console.log('error', error);
      // console.log('data', data);
    };

    fetchPosts();
  }, []);

  return (
    <>
      <div>
        {data && (
          <p>
            POST DETAILS: <br /> {JSON.stringify(data)}
          </p>
        )}
      </div>
      {error && <p>Have a Request Error</p>}
    </>
  );
}

export default Testapi;
