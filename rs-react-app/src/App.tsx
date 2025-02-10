import './App.css';
import ErrorBoundary from './components/error_boundary';
import { Routes, Route } from 'react-router';
import { HomePage } from './pages/homePage';
import { ErrorPage } from './pages/errorPage';
import { Detail } from './views/detail';

function App() {
  return (
    <>
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<HomePage />}>
            <Route path=":id" element={<Detail />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </ErrorBoundary>
    </>
  );
}

export default App;
