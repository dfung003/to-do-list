import React from 'react';
import { useState } from 'react';

export default function Input({ handleSubmit }) {
    const [input, setInput] = useState("");

    const handleChange = (evt) => {
        setInput(evt.target.value)
    }

    const handleForm = (evt) => {
        evt.preventDefault();
        handleSubmit(input);
        setInput("");
    };

    return (
        <main>
            <p>New Item</p>
            <form onSubmit={(handleForm)}>
                <input className="input-field" type="text" value={input} placeholder="add new task" onChange={handleChange} />
            </form>
        </main>
    )
}