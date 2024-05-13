import React from "react";
import { TodoContext } from "../common/TodoContext";

function TodoForm() {
   const { addTodo, setOpenModal } = React.useContext(TodoContext);
   const [newTodoValue, setNewTodoValue] = React.useState('');

   const onCancel = (event) => {
      event.preventDefault();
      setOpenModal(false);
   }

   const onSubmit = (event) => {
      event.preventDefault();
      addTodo(newTodoValue);
      setOpenModal(false);
   }

   const onChange = (event) => {
      const { value } = event.target;
      setNewTodoValue(value);
   }

   return (
      <form onSubmit={onSubmit}>
         <label htmlFor="newTodo">Ingrese su nuevo ToDo</label>
         <textarea
            type="text"
            id="newTodo"
            placeholder="Cortar cebolla"
            value={newTodoValue}
            onChange={onChange}
         />

         <div className="TodoForm-buttonContainer">
            <button
               type="button"
               className="TodoForm-button TodoForm-button--cancel"
               onClick={onCancel}
            >
               Cancelar
            </button>

            <button
               type="submit"
               className="TodoForm-button TodoForm-button--add"
            >
               Agregar
            </button>
         </div>
      </form>
   );
}

export { TodoForm };