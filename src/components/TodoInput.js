import { useState } from 'react';

function TodoInput({ addTodo }) {
    const [input, setInput] = useState('');
   
    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.trim()) {
            addTodo(input);
            setInput('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder='Add a new todo'
            />
            <button type="submit">Add</button>
        </form>
    );
}

export default TodoInput;