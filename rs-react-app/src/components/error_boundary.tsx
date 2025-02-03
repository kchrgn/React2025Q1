import { Component, ErrorInfo } from 'react';
import TopControls from '../views/topcontrols';
import Results from '../views/results';
import ErrorButton from './error_button';

class ErrorBoundary extends Component {
  state: { hasError: boolean };
  constructor(props: Component) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.log('Error = ' + error, 'Error info:' + errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong</h2>;
    }
    return (
      <>
        <TopControls />
        <Results searchTerm="nab" />
        <ErrorButton />
      </>
    );
  }
}

export default ErrorBoundary;
