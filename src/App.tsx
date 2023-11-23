import React from 'react';
import './App.css';
import {TaskType, TodoList} from './TodoList';

//CRUD:
//create
//read
//update
//delete

function App() {

    const todoListTitle_1: string = 'What to learn'
    const todoListTitle_2: string = 'What to buy'

    let tasks_1:Array<TaskType> = [
        {id: 1, title: 'HTML&CSS', isDone: true},
        {id: 1, title: 'JS/ES6', isDone: true},
        {id: 1, title: 'React', isDone: false}
    ]

    let tasks_2:Array<TaskType> = [
        {id: 4, title: 'Beer', isDone: true},
        {id: 5, title: 'Dried fish', isDone: false},
        {id: 6, title: 'Cheeps', isDone: false}
    ]

    return (
        <div className="App">
            <TodoList title={todoListTitle_1} tasks={tasks_1}/>
            <TodoList title={todoListTitle_2} tasks={tasks_2}/>
        </div>
    );
}

export default App;
