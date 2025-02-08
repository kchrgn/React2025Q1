import './App.css';
import TopControls from './views/topcontrols';
import Results from './views/results';
import ErrorBoundary from './components/error_boundary';
import Paginator from './components/paginator/paginator';
import { useState, useEffect } from 'react';
import { IResults, IStatus } from './interfaces/results';
import { SearchTermContext } from './context/searchTermContext';
import { ResultsContext } from './context/resultsContext';
const PLANETS_PER_PAGE = 10;
const API_URL = 'https://swapi.dev/api/planets/';

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
    let url = API_URL + '?search=' + searchTerm + '&page=' + pageNumber;
    console.log(url);

    fetch(url)
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
        setPageCount(Math.ceil(data.count / PLANETS_PER_PAGE));
        setStatus({ ...status, isLoading: false });
      });
  }, [searchTerm, pageNumber]);

  return (
    <>
      <ErrorBoundary>
        <ResultsContext.Provider
          value={{
            results,
            status,
            setStatus,
            pageNumber,
            pageCount,
            setPageNumber,
          }}
        >
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
          <Results />
          <Paginator />
        </ResultsContext.Provider>
      </ErrorBoundary>
    </>
  );
}

export default App;
