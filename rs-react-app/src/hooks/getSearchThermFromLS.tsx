import { useEffect } from 'react';

export default function useGetSearchThermFromLS(
  setSearchFieldValue: React.Dispatch<React.SetStateAction<string>>
): void {
  useEffect(() => {
    const lsValue = localStorage.getItem('searchFieldValue');
    if (lsValue) {
      setSearchFieldValue(lsValue);
    } else {
      localStorage.setItem('searchFieldValue', '');
    }
  }, []);
}
