import { Loader } from '../components/loader/loader';
import { ResultsContext } from '../context/resultsContext';
import './results.css';
import '../components/button.css';
import { useContext } from 'react';

export default function Results() {
  const { status, results } = useContext(ResultsContext);
  if (status.isLoading) {
    return (
      <div className="container">
        <Loader />
      </div>
    );
  }
  if (status.error) {
    return (
      <div className="container">
        <div>HTTP error {status.errorNumber}</div>
      </div>
    );
  } else {
    return (
      <div>
        <h3>Results</h3>
        <div className="container">
          {results &&
            results.planets &&
            results.planets.map((e, index) => (
              <div className="card" key={index}>
                <h4>{e.name}</h4>
                <div>gravity: {e.gravity}</div>
                <div>climate: {e.climate}</div>
              </div>
            ))}
        </div>
      </div>
    );
  }
}
