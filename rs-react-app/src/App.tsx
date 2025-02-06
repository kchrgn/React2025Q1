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

  useEffect(() => {
    const url = 'https://swapi.dev/api/planets/';
    fetch(searchTerm ? url + '?search=' : url)
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          setStatus({ ...status, error: true, errorNumber: res.status });
        }
        return res.json()
      })
      .then((data) => {
        setResults({planets: data.results})
        setStatus({ ...status, isLoading: false });
      })
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
