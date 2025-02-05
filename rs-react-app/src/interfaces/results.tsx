import { IPlanet } from './SWapi';

export interface IResults {
  planets: IPlanet[] | null;
}

export interface IStatus {
  isLoading: boolean;
  error: boolean;
  errorNumber: number;
}

export interface IResultsProps {
  list: IResults | undefined;
  apiStatus: IStatus;
}
