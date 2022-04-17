import React from 'react';

export default function Completed(props) {
    return (
        <main>
            <h1>Completed</h1>
            <ul>
                {
                    props.completedItem.map((item) => {
                        return (
                            <li>
                                {item} <button>Remove</button>
                            </li>
                        )
                    })
                }
            </ul>
        </main>
    )
}