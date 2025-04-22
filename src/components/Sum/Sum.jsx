// export const Sum = () => ();
import React from 'react';

export function Sum({ a, b }) {
  const safeA = typeof a === 'number' ? a : 0;
  const safeB = typeof b === 'number' ? b : 0;

  return (
    <p>
      Sum of {safeA} and {safeB} is {safeA + safeB}
    </p>
  );
}
