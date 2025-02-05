import { Component, ErrorInfo, ReactNode } from 'react';

interface IErrorBoundaryProps {
  children: ReactNode;
}
interface IErrorBoundaryState {
  hasError: boolean;
}
class ErrorBoundary extends Component<
  IErrorBoundaryProps,
  IErrorBoundaryState
> {
  constructor(props: IErrorBoundaryProps) {
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
    return this.props.children;
  }
}

export default ErrorBoundary;
