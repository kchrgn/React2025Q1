import { SearchTermContext } from '../context/searchTermContext';
import { ResultsContext } from '../context/resultsContext';
import { useContext } from 'react';
import './button.css';

export default function SearchButton() {
  const { searchFieldValue, setSearchTerm } = useContext(SearchTermContext);
  const { setPageNumber } = useContext(ResultsContext);
  return (
    <button
      className="btn search"
      onClick={() => {
        setSearchTerm(searchFieldValue);
        setPageNumber(1);
      }}
    >
      Search
    </button>
  );
}
