import { useState } from 'react';
import './button.css';

export default function ErrorButton() {
  const [emitError, setEmitError] = useState(false);
  if (emitError) throw new Error('User trhrown error');
  return (
    <>
      <button
        className="btn error"
        onClick={() => {
          setEmitError(true);
        }}
      >
        Error Button
      </button>
    </>
  );
}
