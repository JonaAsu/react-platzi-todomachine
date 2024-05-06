import React from "react";
import { TodoContext } from "../views/common/TodoContext";
import { TodoCounter } from '../views/todos/TodoCounter';
import { TodoSearch } from '../views/todos/TodoSearch';
import { TodoList } from '../views/todos/TodoList';
import { TodoItem } from '../views/todos/TodoItem';
import { CreateTodoButton } from '../views/todos/CreateTodoButton';
import { TodosLoading } from "../views/common/TodosLoading";
import { TodosError } from "../views/common/TodosError";
import { EmptyTodos } from "../views/common/EmptyTodos";

function AppUI() {
   return (
      <>
         <TodoCounter />
         <TodoSearch />

         <TodoContext.Consumer>
            { ({
               loading,
               error,
               searchedTodos,
               completeTodo,
               deleteTodo
            }) => (
               <TodoList>
                  {loading && (
                     <>
                        <TodosLoading />
                        <TodosLoading />
                        <TodosLoading />
                     </>
                  )}
                  {error && <TodosError />}
                  {(!loading && !searchedTodos.length) && <EmptyTodos />}

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
            )}
         </TodoContext.Consumer>

         <CreateTodoButton />
      </>
   );
}

export { AppUI }