import { Component } from 'react';
import { IPlanet } from '../interfaces/SWapi';

interface IResult {
  planets: IPlanet[] | null;
  loaded: boolean;
  error: boolean;
  errorText: number;
}

type IProps = {
  searchTerm: string;
};

class Results extends Component<IProps, IResult> {
  state: IResult = {
    planets: null,
    loaded: false,
    error: false,
    errorText: 200,
  };
  async componentDidMount(): Promise<void> {
    const response = await fetch('https://swapi.dev/api/planets/');
    if (response.ok) {
      const json = await response.json();
      this.setState({ planets: json.results, loaded: true });
    } else {
      this.setState({ error: true, errorText: response.status });
    }
  }
  render() {
    if (this.state.loaded) {
      return (
        <div>
          <h3>Results</h3>
          {this.state.planets &&
            this.state.planets.map((e, index) => (
              <div key={index}>
                <h4>{e.name}</h4>
                <div>gravity: {e.gravity}</div>
                <div>climate: {e.climate}</div>
              </div>
            ))}
        </div>
      );
    }
    if (this.state.error) {
      return <div>HTTP error {this.state.errorText}</div>;
    } else {
      return <div>Loading ...</div>;
    }
  }
}

export default Results;
