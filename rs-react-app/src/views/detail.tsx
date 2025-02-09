import { useParams, useNavigate } from 'react-router';
import { useState, useEffect } from 'react';
import { API_URL } from '../pages/homePage';
import { IPlanet } from '../interfaces/SWapi';
import { Loader } from '../components/loader/loader';
import { useContext } from 'react';
import { ResultsContext } from '../context/resultsContext';
import './detail.css';

export function Detail() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [errorCode, setErrorCode] = useState(200);
  const [detail, setDetail] = useState<IPlanet>();
  const { setItem } = useContext(ResultsContext);
  const navigate = useNavigate();

  useEffect(() => {
    const url = API_URL + '/' + id;
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
      <div className="detail_card">
        <Loader />
      </div>
    );
  }
  if (error) {
    return (
      <div className="detail_card">
        <div>HTTP error {errorCode}</div>
      </div>
    );
  } else {
    return (
      <>
        <div className="detail_card">
          <h3>{detail?.name}</h3>
          <div>Gravity: {detail?.gravity}</div>
          <div>Climate: {detail?.climate}</div>
          <div>Diameter: {detail?.diameter}</div>
          <div>Population: {detail?.population}</div>
          <div>Surface water: {detail?.surface_water}</div>
          <div>Rotation period: {detail?.rotation_period}</div>
          <div>Orbital period: {detail?.orbital_period}</div>

          <button
            className="btn error"
            onClick={() => {
              setItem(0);
              navigate('/');
            }}
          >
            Close detail card
          </button>
        </div>
      </>
    );
  }
}
