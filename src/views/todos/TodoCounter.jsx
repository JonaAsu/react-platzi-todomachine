import React from 'react';
import { TodoContext } from '../common/TodoContext';
import '../../public/css/counter.css';

function TodoCounter() {
   const { completedTodos, totalTodos } =  React.useContext(TodoContext);

   return (
      <h2 className='TodoCounter'>
         Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODOs
      </h2>
   );
}

export { TodoCounter };