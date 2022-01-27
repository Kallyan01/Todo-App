import React, { useState } from 'react';
import Todo from './Todo';
import Todoform from './Todoform';
function Todolist() {
    const [Todos, setTodos] = useState([])
    const addTodo = (todo) => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }
        const newTodos = [todo, ...Todos]
        setTodos(newTodos)

        console.log(todo, ...Todos);
    }
    const completeTodo = id => {
        let updatedTodos = Todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete
            }
            return todo;
        })
        setTodos(updatedTodos)
    }
    const removeTodo = id => {
        const removeArr = [...Todos.filter(todo => todo.id !== id)]
        setTodos(removeArr)
    }
    const updateTodo = (todoId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
        }

        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))
    }
    return (
        <>
            <h1>Add Your Tasks here</h1>
            <Todoform onSubmit={addTodo} />
            <div className="todo-list">
                <Todo todos={Todos} compleateTodo={completeTodo} updateTodo={updateTodo} removeTodo={removeTodo} />
            </div>
        </>
    )
}

export default Todolist;
