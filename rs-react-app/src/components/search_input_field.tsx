import { useEffect, useContext } from 'react';
import { ChangeEvent } from 'react';
import { SearchTermContext } from '../context/searchTermContext';

export default function SearchInputField() {
  const { searchFieldValue, setSearchFieldValue } =
    useContext(SearchTermContext);

  const handleSearchValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchFieldValue(e.target.value);
    localStorage.setItem('searchFieldValue', e.target.value);
  };

  useEffect(() => {
    const lsValue = localStorage.getItem('searchFieldValue');
    if (lsValue) {
      setSearchFieldValue(lsValue);
    } else {
      localStorage.setItem('searchFieldValue', '');
    }
  }, []);

  return (
    <>
      <input
        type="text"
        value={searchFieldValue}
        onChange={handleSearchValueChange}
      ></input>
    </>
  );
}
