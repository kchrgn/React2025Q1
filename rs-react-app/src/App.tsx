import './App.css';
import TopControls from './views/topcontrols';
import Results from './views/results';
import ErrorButton from './components/error_button';

function App() {
  return (
    <>
      <TopControls />
      <Results />
      <ErrorButton />
    </>
  );
}

export default App;
