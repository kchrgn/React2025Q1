import { useContext } from 'react';
import { ResultsContext } from '../../context/resultsContext';
import './paginator.css';

export default function Paginator() {
  const { pageNumber, pageCount, setPageNumber } = useContext(ResultsContext);
  const pages = Array.from({ length: pageCount }, (_, index) => index + 1);
  return (
    <>
      <div className="center">
        <div className="paginator">
          {pages.map((e, index) => {
            if (e == pageNumber) {
              return (
                <a
                  className="active"
                  onClick={() => {
                    setPageNumber(e);
                  }}
                  key={index}
                >
                  {e}
                </a>
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
        </div>
      </div>
    </>
  );
}
