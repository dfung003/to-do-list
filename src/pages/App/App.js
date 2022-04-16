import React from 'react';
import './App.css';
import { useState, useEffect } from "react";
import Header from '../../components/header/Header';
import Input from "../../components/input/Input"
import Completed from '../../components/completedList/Completed';
import List from '../../components/list/List';
import data from "../../data";

export default function App(props) {
    const [inputItem, setInputItem] = useState(data);
    const [completedItem, setCompletedItem] = useState([]);

    const addToCompleted = (item) => {
        const completeItems = [item, ...completedItem];
        setCompletedItem(completeItems);
    };

    const handleSubmit = (item) => {
        setInputItem([{ title: item }, ...inputItem]);
    }
    return (
        <main className="App">
            <Header />
            <Input handleSubmit={handleSubmit} />
            <List inputItem={inputItem} addToCompleted={addToCompleted} />
            <Completed completedItem={completedItem} />
        </main>
    )
};