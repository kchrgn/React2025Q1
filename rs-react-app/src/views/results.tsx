import { Loader } from '../components/loader/loader';
import { ResultsContext } from '../context/resultsContext';
import './results.css';
import '../components/button.css';
import { useContext } from 'react';
import { NavLink } from 'react-router';

export default function Results() {
  const { status, results, setItem } = useContext(ResultsContext);
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
      <div>
        <h3>Planets</h3>
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
                  <h3>{e.name}</h3>
                </NavLink>
              );
            })}
        </div>
      </div>
    );
  }
}
