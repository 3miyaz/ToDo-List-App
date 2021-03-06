import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

const TodoList = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        if (!todo.text || /^\s*$/.test(todo.text)){
            return;
        }

        setTodos([todo, ...todos]);
    };

    const updateTodo = (todoID, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)){
            return;
        }

        setTodos(prev => prev.map(item => item.id === todoID ? newValue : item));       
    };


    const removeTodo = id => {
        setTodos([...todos].filter(todo => todo.id !== id));
    }; 

    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id){
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });
        setTodos(updatedTodos);
    }

    return (
        <div>
            <h1>What's the Plan for Today ?</h1>
            <TodoForm onSubmit={addTodo}/>
            <Todo 
                todos={todos} 
                completeTodo={completeTodo} 
                removeTodo={removeTodo}
                updateTodo={updateTodo}
            />
        </div>
    );
}

export default TodoList;
