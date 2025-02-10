import { SearchTermContext } from '../context/searchTermContext';
import { ResultsContext } from '../context/resultsContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router';
import './button.css';

export default function SearchButton() {
  const { searchFieldValue, setSearchTerm } = useContext(SearchTermContext);
  const { setItem, setPageNumber } = useContext(ResultsContext);
  const navigate = useNavigate();
  return (
    <button
      className="btn search"
      onClick={() => {
        setSearchTerm(searchFieldValue);
        setPageNumber(1);
        setItem(0);
        navigate('/');
      }}
    >
      Search
    </button>
  );
}
