import React from 'react';
import '../../public/css/counter.css';

function CreateTodoButton() {
   return (
      <button
         className='CreateTodoButton'
         onClick={
            (event) => {
               console.log('click en el botón')
               console.log(event)
               console.log(event.target)
            }
         }
      >
         +
      </button>
   );
}

export { CreateTodoButton };