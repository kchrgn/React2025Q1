import { Loader } from '../components/loader/loader';
import { IResultsProps } from '../interfaces/results';
import './results.css';

export default function Results({ list, apiStatus }: IResultsProps) {
  if (apiStatus.isLoading) {
    return (
      <div className='container'>
        <Loader />
      </div>
    )
  }
  if (apiStatus.error) {
    return <div>HTTP error {apiStatus.errorNumber}</div>;
  } else {
    return (
      <div>
        <h3>Results</h3>
        <div className="container">
          {list &&
            list.planets &&
            list.planets.map((e, index) => (
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
