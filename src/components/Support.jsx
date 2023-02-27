import { useState, useEffect } from 'react';

const pageTitle = document.title;

useEffect(() => {
  if (count > 0) {
    document.title = `${pageTitle}--${count}`;
  }
  // consise
  // count && (document.title = `${pageTitle}--${count}`);
});

export default () => {
  const [count, setCount] = useState(0)
  return (
    <button className="outline" onClick={() => setCount(count + 1)}>
      {count === 0 ? "Click to support" : `Supported ${count} times`}
    </button>
  )
}