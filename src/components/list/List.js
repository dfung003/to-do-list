import React from 'react';
import ListItem from '../listItem/ListItem';


export default function List({ addToCompleted, inputItem }) {
    return (
        <main>
            <h1>To-Do Items</h1>
            <ul>
                {
                    inputItem.map((item, idx) => {
                        return (
                            <ListItem key={idx} content={item.title} addToCompleted={addToCompleted} />
                        )
                    })
                }
            </ul>
        </main>
    )
}