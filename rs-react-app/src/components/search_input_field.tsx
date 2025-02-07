import { useContext } from 'react';
import { ChangeEvent } from 'react';
import { SearchTermContext } from '../context/searchTermContext';
import useGetSearchThermFromLS from '../hooks/getSearchThermFromLS';

export default function SearchInputField() {
  const { searchFieldValue, setSearchFieldValue } =
    useContext(SearchTermContext);

  const handleSearchValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchFieldValue(e.target.value);
    localStorage.setItem('searchFieldValue', e.target.value);
  };

  useGetSearchThermFromLS(setSearchFieldValue);

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
