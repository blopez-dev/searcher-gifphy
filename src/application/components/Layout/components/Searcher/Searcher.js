import React, { useState } from 'react';

function Searcher() {
  const [inputValue, setInputValue] = useState('Find your gif');

  const handleChange = (e) => {
    e.preventDefault();
    setInputValue(e.target.value);
  };

  return (
    <div>
      <form>
        <input type="text" value={inputValue} onChange={handleChange} />
      </form>
    </div>
  );
}

export default Searcher;
