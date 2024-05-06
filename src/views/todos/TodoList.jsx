import React from 'react';
import '../../public/css/counter.css';

function TodoList(props) {
   return (
      <ul className='TodoList'>
         {props.children}
      </ul>
   );
}

export { TodoList };