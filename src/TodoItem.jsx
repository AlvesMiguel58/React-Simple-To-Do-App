/* eslint-disable react/prop-types */
export function TodoItem({completed, id, title, toogleTodo, deleteTodo}) {
    return (
        <li>
            <label>
                <input type="checkbox" checked={completed} onChange={(e) => toogleTodo(id, e.target.checked)} />
                {title}
            </label>
            <button onClick={() => deleteTodo(id)} className="btn btn-danger">
                Delete
            </button>
        </li>
    );
}
