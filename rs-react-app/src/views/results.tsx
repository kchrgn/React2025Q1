import { Loader } from '../components/loader/loader';
import { ResultsContext } from '../context/resultsContext';
import './results.css';
import '../components/button.css';
import { useContext } from 'react';
import { NavLink } from 'react-router';

export default function Results() {
  const { status, results, item, setItem } = useContext(ResultsContext);
  if (status.isLoading) {
    return (
      <div className="results_container">
        <Loader />
      </div>
    );
  }
  if (status.error) {
    return (
      <div className="results_container">
        <div>HTTP error {status.errorNumber}</div>
      </div>
    );
  } else {
    return (
      <div
        onClick={() => {
          if (item) setItem(0);
        }}
      >
        <h3>Results</h3>
        <div className="items_container">
          {results &&
            results.planets &&
            results.planets.map((e, index) => {
              const id = e.url.slice(30, -1);
              return (
                <NavLink
                  to={id}
                  className="card"
                  key={index}
                  onClick={() => {
                    {
                      setItem(Number(id));
                    }
                  }}
                >
                  <h4>{e.name}</h4>
                  <div>gravity: {e.gravity}</div>
                  <div>climate: {e.climate}</div>
                  <div>{Number(id)}</div>
                </NavLink>
              );
            })}
        </div>
      </div>
    );
  }
}
