/* eslint-disable react/prop-types */
import {TodoItem} from './TodoItem';

export function TodoList({todos, toogleTodo, deleteTodo}) {
    return (
        <ul className="list">
            {todos.length === 0 && <li>No items</li>}
            {todos.map((todo) => {
                return <TodoItem {...todo} key={todo.id} toogleTodo={toogleTodo} deleteTodo={deleteTodo} />;
            })}
        </ul>
    );
}
