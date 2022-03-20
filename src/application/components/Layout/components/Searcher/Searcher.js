import React, { useState } from 'react';
import { FormSearch } from './styles';

function Searcher() {
  const [inputValue, setInputValue] = useState('');

  const handlerInputValue = (e) => {
    setInputValue(e.target.value);
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <FormSearch onSubmit={handlerSubmit}>
      <input type="text" value={inputValue} onChange={handlerInputValue} />
    </FormSearch>
  );
}

export default Searcher;
