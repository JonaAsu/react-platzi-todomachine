import React from 'react';
import { TodoContext } from '../common/TodoContext';
import '../../public/css/counter.css';

function TodoSearch() {
   const { searchValue, setSearchValue } = React.useContext(TodoContext);

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