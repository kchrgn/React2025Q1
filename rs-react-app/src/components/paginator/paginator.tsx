import { useContext } from 'react';
import { ResultsContext } from '../../context/resultsContext';
import { Link } from 'react-router';
import './paginator.css';

export default function Paginator() {
  const { pageNumber, pageCount, setPageNumber } = useContext(ResultsContext);
  const pages = Array.from({ length: pageCount }, (_, index) => index + 1);
  return (
    <>
      <div className="center">
        <nav className="paginator">
          {pages.map((e, index) => {
            if (e == pageNumber) {
              return (
                <Link
                  to="/"
                  className="active"
                  onClick={() => {
                    setPageNumber(e);
                  }}
                  key={index}
                >
                  {e}
                </Link>
              );
            } else {
              return (
                <a
                  onClick={() => {
                    setPageNumber(e);
                  }}
                  key={index}
                >
                  {e}
                </a>
              );
            }
          })}
        </nav>
      </div>
    </>
  );
}
