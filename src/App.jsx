import {useEffect, useState} from 'react';
import './styles.css';
import {NewTodoForm} from './NewTodoForm';
import {TodoList} from './TodoList';

export default function App() {
    const [todos, setTodos] = useState(() => {
        const localValue = localStorage.getItem('ITEMS');
        if (localValue === null) return [];
        return JSON.parse(localValue);
    });

    useEffect(() => {
        localStorage.setItem('ITEMS', JSON.stringify(todos));
    }, [todos]);

    function addTodo(title) {
        setTodos((currentToDos) => {
            return [...currentToDos, {id: crypto.randomUUID(), title, completed: false}];
        });
    }

    function toogleTodo(id, completed) {
        setTodos((currentToDos) => {
            return currentToDos.map((todo) => {
                if (todo.id === id) {
                    return {...todo, completed};
                }
                return todo;
            });
        });
    }

    function deleteTodo(id) {
        setTodos((currentToDos) => {
            return currentToDos.filter((todo) => todo.id !== id);
        });
    }

    return (
        // add fragment to wrap the form, react at top level can only return one element
        <>
            <NewTodoForm onSubmit={addTodo} />
            <h1 className="header">Todo List</h1>
            <TodoList todos={todos} toogleTodo={toogleTodo} deleteTodo={deleteTodo} />
        </>
    );
}
