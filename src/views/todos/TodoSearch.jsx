import React from 'react';
import '../../public/css/counter.css';

function TodoSearch({ searchValue, setSearchValue }) {
   return (
      <input
         className="TodoSearch"
         onChange={ (e) => {
            setSearchValue(e.target.value)
         }}
         placeholder="Busque sus ToDo..."
         type="text"
         value={ searchValue }
      />
   );
}

export { TodoSearch };