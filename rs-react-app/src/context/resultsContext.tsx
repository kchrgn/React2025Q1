import { createContext } from 'react';

interface IResultsContext {
  pageNumber: number;
  pageCount: number;
  setPageNumber: React.Dispatch<React.SetStateAction<number>>;
}
export const ResultsContext = createContext<IResultsContext>({
  pageNumber: 1,
  pageCount: 0,
  setPageNumber: () => {},
});
