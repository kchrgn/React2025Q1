import { useState } from 'react';

export default function ErrorButton() {
  const [emitError, setEmitError] = useState(false);
  if (emitError) throw new Error('User trhrown error');
  return (
    <>
      <button
        onClick={() => {
          setEmitError(true);
        }}
      >
        Error Button
      </button>
    </>
  );
}
