import './App.css';
import TopControls from './views/topcontrols';
import Results from './views/results';
import ErrorButton from './components/error_button';
import ErrorBoundary from './components/error_boundary';
import { useState, useEffect } from 'react';
import { IResults, IStatus } from './interfaces/results';
import { SearchTermContext } from './context/searchTermContext';

function App() {
  const [results, setResults] = useState<IResults>();
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchFieldValue, setSearchFieldValue] = useState<string>('');
  const [status, setStatus] = useState<IStatus>({
    isLoading: true,
    error: false,
    errorNumber: 200,
  });

  useEffect(() => {
    const url = 'https://swapi.dev/api/planets/';
    setStatus({ ...status, isLoading: true });
    fetch(searchTerm ? url + '?search=' + searchTerm : url)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          setStatus({ ...status, error: true, errorNumber: res.status });
        }
        return res.json();
      })
      .then((data) => {
        setResults({ planets: data.results });
        setStatus({ ...status, isLoading: false });
      });
  }, [searchTerm]);

  return (
    <>
      <ErrorBoundary>
        <SearchTermContext.Provider
          value={{
            searchTerm,
            searchFieldValue,
            setSearchFieldValue,
            setSearchTerm,
          }}
        >
          <TopControls />
          <Results list={results} apiStatus={status} />
          <ErrorButton />
        </SearchTermContext.Provider>
      </ErrorBoundary>
    </>
  );
}

export default App;
