import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import { API_URL } from '../pages/homePage';
import { IPlanet } from '../interfaces/SWapi';
import { Loader } from '../components/loader/loader';
import { useContext } from 'react';
import { ResultsContext } from '../context/resultsContext';

export function Detail() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [errorCode, setErrorCode] = useState(200);
  const [detail, setDetail] = useState<IPlanet>();
  const { setItem } = useContext(ResultsContext);

  const url = API_URL + '/' + id;

  useEffect(() => {
    setIsLoading(true);

    fetch(url)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          setError(true);
          setErrorCode(res.status);
        }
        return res.json();
      })
      .then((data) => {
        setDetail(data);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <div className="results_container">
        {' '}
        <Loader />{' '}
      </div>
    );
  }
  if (error) {
    return (
      <div className="results_container">
        <div>HTTP error {errorCode}</div>
      </div>
    );
  } else {
    return (
      <>
        <div>
          <h3>{detail?.name}</h3>
          <p>ID={id}</p>
          <button
            className="btn error"
            onClick={() => {
              setItem(0);
            }}
          >
            Close detail card
          </button>
        </div>
      </>
    );
  }
}
