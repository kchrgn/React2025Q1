import { Component } from 'react';

class Results extends Component {
  async componentDidMount(): Promise<void> {
    const response = await fetch('https://swapi.dev/api/planets/');
    if (response.ok) {
      const json = await response.json();
      const planets = json.results;
      console.log(planets);
    }
  }
  render() {
    return (
      <div>
        <h3>Results</h3>
        <div>Results content</div>
      </div>
    );
  }
}

export default Results;
