import { createContext } from 'react';
import { ISearchTermContext } from '../interfaces/searchTermContext';
export const SearchTermContext = createContext<ISearchTermContext>({
  searchTerm: '',
  searchFieldValue: '',
  setSearchFieldValue: () => {},
  setSearchTerm: () => {},
});
