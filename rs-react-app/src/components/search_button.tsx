import { SearchTermContext } from '../context/searchTermContext';
import { useContext } from 'react';
export default function SearchButton() {
  const { searchFieldValue, setSearchTerm } = useContext(SearchTermContext);
  return (
    <button
      onClick={() => {
        setSearchTerm(searchFieldValue);
      }}
    >
      Search
    </button>
  );
}
