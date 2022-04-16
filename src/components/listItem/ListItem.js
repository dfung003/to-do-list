import React from 'react';

export default function ListItem(props) {
    return (
        <main>
            <h1>List Items</h1>
            <li onClick={() => props.addToCompleted(props.content)}>
                {
                    props.content
                }
                <button>
                    Completed
                </button>
            </li>
        </main>
    )
}