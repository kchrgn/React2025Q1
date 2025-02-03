import './App.css';
import TopControls from './views/topcontrols';
import Results from './views/results';
import ErrorButton from './components/error_button';
import ErrorBoundary from './components/error_boundary';

function App() {
  return (
    <>
      <ErrorBoundary>
        <TopControls />
        <Results searchTerm="" />
        <ErrorButton />
      </ErrorBoundary>
    </>
  );
}

export default App;
