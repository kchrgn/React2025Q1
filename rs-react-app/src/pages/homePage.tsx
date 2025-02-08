import TopControls from '../components/topcontrols';
import Results from '../views/results';
import Paginator from '../components/paginator/paginator';

import { useState, useEffect } from 'react';
import { IResults, IStatus } from '../interfaces/results';
import { SearchTermContext } from '../context/searchTermContext';
import { ResultsContext } from '../context/resultsContext';
import { useSearchParams } from 'react-router';
import { Outlet } from 'react-router';
import './homepage.css';

const PLANETS_PER_PAGE = 10;
export const API_URL = 'https://swapi.dev/api/planets/';

export function HomePage() {
  const [results, setResults] = useState<IResults>();
  const [pageNumber, setPageNumber] = useState(1);
  const [pageCount, setPageCount] = useState<number>(0);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchFieldValue, setSearchFieldValue] = useState<string>('');
  const [item, setItem] = useState(0);
  const [status, setStatus] = useState<IStatus>({
    isLoading: true,
    error: false,
    errorNumber: 200,
  });
  const [_, setSearchParams] = useSearchParams();

  useEffect(() => {
    setStatus({ ...status, isLoading: true });
    if (searchTerm) {
      setSearchParams((prev) => {
        prev.set('search', searchTerm);
        return prev;
      });
    } else {
      setSearchParams((prev) => {
        prev.delete('search');
        return prev;
      });
    }

    const url = API_URL + '?search=' + searchTerm + '&page=' + pageNumber;
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
        const cnt = Math.ceil(data.count / PLANETS_PER_PAGE);
        setPageCount(cnt);
        setStatus({ ...status, isLoading: false });
        if (cnt > 1) {
          setSearchParams((prev) => {
            prev.set('page', pageNumber.toString());
            return prev;
          });
        } else {
          setSearchParams((prev) => {
            prev.delete('page');
            return prev;
          });
        }
      });
  }, [searchTerm, pageNumber]);
  return (
    <ResultsContext.Provider
      value={{
        results,
        status,
        setStatus,
        pageNumber,
        pageCount,
        setPageNumber,
        item,
        setItem,
      }}
    >
      {' '}
      <div className="main_container">
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
        <div className="results_container">
          <div className="list_container">
            <Results />
            <Paginator />
          </div>
          <div className="detail_container">{item != 0 && <Outlet />}</div>
        </div>
      </div>
    </ResultsContext.Provider>
  );
}
