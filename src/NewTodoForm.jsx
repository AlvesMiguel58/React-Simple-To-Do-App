/* eslint-disable react/prop-types */
import {useState} from 'react';

export function NewTodoForm({onSubmit}) {
    const [newItem, setNewItem] = useState('');

    function handleSubmit(e) {
        e.preventDefault();

        // setTodos((currentToDos) => {
        //     return [...currentToDos, {id: crypto.randomUUID(), title: newItem, completed: false}];
        // });

        if (newItem === '') return;
        // eslint-disable-next-line react/prop-types
        onSubmit(newItem);

        // clear form after submit
        setNewItem('');
    }

    return (
        <form onSubmit={handleSubmit} className="new-item-form">
            <div className="form-row">
                <label htmlFor="item">New Item</label>
                <input value={newItem} onChange={(e) => setNewItem(e.target.value)} type="text" id="item" />
            </div>
            <button className="btn">Add</button>
        </form>
    );
}