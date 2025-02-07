import { SearchTermContext } from '../context/searchTermContext';
import { useContext } from 'react';
import './button.css'

export default function SearchButton() {
  const { searchFieldValue, setSearchTerm } = useContext(SearchTermContext);
  return (
    <button className='btn search'
      onClick={() => {
        setSearchTerm(searchFieldValue);
      }}
    >
      Search
    </button>
  );
}
