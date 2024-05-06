import React from "react";
import { TodoCounter } from '../views/todos/TodoCounter';
import { TodoSearch } from '../views/todos/TodoSearch';
import { TodoList } from '../views/todos/TodoList';
import { TodoItem } from '../views/todos/TodoItem';
import { CreateTodoButton } from '../views/todos/CreateTodoButton';

function AppUI({
   totalTodos,
   completedTodos,
   searchValue,
   setSearchValue,
   searchedTodos,
   completeTodo,
   deleteTodo
}) {
   return (
      <>
         <TodoCounter
            completed={completedTodos}
            total={totalTodos}
         />
         <TodoSearch
            searchValue={searchValue}
            setSearchValue={setSearchValue}
         />

         <TodoList>
            {searchedTodos.map((todo, index) => (
            <TodoItem
               key={index}
               text={todo.text}
               completed={todo.completed}
               onComplete={() => completeTodo(todo.text)}
               onDelete={() => deleteTodo(todo.text)}
            />
            ))}
         </TodoList>

         <CreateTodoButton />
      </>
   );
}

export { AppUI }