import { IResultsProps } from '../interfaces/results';

export default function Results({ list, apiStatus }: IResultsProps) {
  if (apiStatus.isLoading) {
    return <div>Loading ...</div>;
  }
  if (apiStatus.error) {
    return <div>HTTP error {apiStatus.errorNumber}</div>;
  } else {
    return (
      <div>
        <h3>Results</h3>
        {list &&
          list.planets &&
          list.planets.map((e, index) => (
            <div key={index}>
              <h4>{e.name}</h4>
              <div>gravity: {e.gravity}</div>
              <div>climate: {e.climate}</div>
            </div>
          ))}
      </div>
    );
  }
}
