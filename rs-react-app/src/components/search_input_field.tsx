import { useState, useEffect } from 'react';
import { ChangeEvent } from 'react';

export default function SearchInputField() {
  const [value, setValue] = useState('');

  const handleSearchValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    localStorage.setItem('searchFieldValue', e.target.value);
  };

  useEffect(() => {
    const lsValue = localStorage.getItem('searchFieldValue');
    if (lsValue) {
      setValue(lsValue);
    } else {
      localStorage.setItem('searchFieldValue', '');
    }
  }, []);

  return (
    <>
      <input
        type="text"
        value={value}
        onChange={handleSearchValueChange}
      ></input>
    </>
  );
}
