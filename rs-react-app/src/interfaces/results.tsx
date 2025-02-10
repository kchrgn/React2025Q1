import { IPlanet } from './SWapi';

export interface IResults {
  planets: IPlanet[] | undefined;
}

export interface IStatus {
  isLoading: boolean;
  error: boolean;
  errorNumber: number;
}
