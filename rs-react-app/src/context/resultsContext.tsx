import { createContext } from 'react';
import { IResults, IStatus } from '../interfaces/results';

interface IResultsContext {
  results: IResults | undefined;
  status: IStatus;
  setStatus: React.Dispatch<React.SetStateAction<IStatus>>;
  pageNumber: number;
  pageCount: number;
  setPageNumber: React.Dispatch<React.SetStateAction<number>>;
}
export const ResultsContext = createContext<IResultsContext>({
  results: { planets: [] },
  status: { isLoading: true, error: false, errorNumber: 0 },
  setStatus: () => {},
  pageNumber: 1,
  pageCount: 0,
  setPageNumber: () => {},
});
