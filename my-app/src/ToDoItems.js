import React from 'react'
import ToDoItem from './ToDoItem'

function ToDoItems(props) {
    return (
        <div className="todo-list">
          
          <ToDoItem placeholder="Placehoder Item 1" name="item-1"/>

          <ToDoItem placeholder="Placehoder Item 2" name="item-2"/>

          <ToDoItem placeholder="Placehoder Item 3" name="item-3"/>

          <ToDoItem placeholder="Placehoder Item 4" name="item-4"/>

              Message is: {props.message}
          
      </div>
    )
}

export default ToDoItems