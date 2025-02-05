import './App.css';
import TopControls from './views/topcontrols';
import Results from './views/results';
import ErrorButton from './components/error_button';
import ErrorBoundary from './components/error_boundary';
import { useState, useEffect } from 'react';
import { IResults, IStatus } from './interfaces/results';

function App() {
  const [results, setResults] = useState<IResults>();
  const [searchTerm, setSearchTerm] = useState('');
  const [status, setStatus] = useState<IStatus>({
    isLoading: true,
    error: false,
    errorNumber: 200,
  });

  async function getAPIData(search: string) {
    const url = 'https://swapi.dev/api/planets/';
    const response = await fetch(search ? url + '?search=' : url);
    if (response.ok) {
      const json = await response.json();
      setResults(json.results);
      console.log(results);
      setStatus({ ...status, isLoading: false });
    } else {
      setStatus({ ...status, error: true, errorNumber: response.status });
    }
  }

  useEffect(() => {
    getAPIData(searchTerm);
  }, [searchTerm]);

  return (
    <>
      <ErrorBoundary>
        <TopControls />
        <Results list={results} apiStatus={status} />
        <ErrorButton />
      </ErrorBoundary>
    </>
  );
}

export default App;
