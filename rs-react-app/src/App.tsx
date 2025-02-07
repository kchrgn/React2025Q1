import './App.css';
import TopControls from './views/topcontrols';
import Results from './views/results';
import ErrorButton from './components/error_button';
import ErrorBoundary from './components/error_boundary';
import Paginator from './components/paginator/paginator';
import { useState, useEffect } from 'react';
import { IResults, IStatus } from './interfaces/results';
import { SearchTermContext } from './context/searchTermContext';
import { ResultsContext } from './context/resultsContext';
const PLANETS_PER_PAGE = 10;
const API_URL = 'https://swapi.dev/api/planets/'

function App() {
  const [results, setResults] = useState<IResults>();
  const [pageNumber, setPageNumber] = useState(1);
  const [pageCount, setPageCount] = useState<number>(0);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchFieldValue, setSearchFieldValue] = useState<string>('');
  const [status, setStatus] = useState<IStatus>({
    isLoading: true,
    error: false,
    errorNumber: 200,
  });

  useEffect(() => {
    setStatus({ ...status, isLoading: true });
    fetch(searchTerm ? API_URL + '?search=' + searchTerm : API_URL)
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
        setPageCount(Math.ceil(data.count/PLANETS_PER_PAGE));
        setPageNumber(1);
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
        </SearchTermContext.Provider>
        <ResultsContext.Provider value={{pageNumber, pageCount, setPageNumber}} >
          <Results list={results} apiStatus={status} />
          <Paginator />
        </ResultsContext.Provider>
      </ErrorBoundary>
    </>
  );
}

export default App;
