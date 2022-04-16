import React from 'react';
import './App.css';
import Header from '../../components/header/Header';
import { useState, useEffect } from "react";
import Input from "../../components/input/Input"

export default function App() {
    return (
        <main className="App">
            <Header />
            <Input />
        </main>
    )
};