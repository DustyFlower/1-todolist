import React from 'react';
import './App.css';
import {Todolist} from "./Todolist";

function App() {
    const truck1 = "What to learn1"
    const truck2 = 'What to learn22'
    const truck3 = 100200
    const truck4 = true

    const tasks1 = [
        { id: 1, title: "HTML&CSS", isDone: true },
        { id: 2, title: "JS", isDone: true },
        { id: 3, title: "ReactJS", isDone: false },
        { id: 4, title: "ReactJS444", isDone: false }
    ]
    const tasks2 = [
        { id: 1, title: "Hello world", isDone: true },
        { id: 2, title: "I am Happy", isDone: false },
        { id: 3, title: "Yo", isDone: false }
    ]

    return (
        <div className="App">
            <Todolist truck={truck1} truck2={truck3} tasks={tasks1}/> //январь
            <Todolist truck={truck2} truck3={truck4} tasks={tasks2}/> //февраль
        </div>
    );
}


/*
function App() {

    const truck = 'What to learn1'
    const truckNew = 'What to learn2'

    const tasks1 = [
        {id: 1, title: "CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "React", isDone: false},
        {id: 4, title: "Reactdfdfd", isDone: false},
    ]

    const tasks2 = [
        {id: 1, title: "Terminator", isDone: true},
        {id: 2, title: "XXX", isDone: false},
        {id: 3, title: "Jentlments of fortune", isDone: true},
    ]

    return (
        <div className="App">
            <Todolist truck={truck} truck2={2223} tasks={tasks1}/>
            <Todolist truck={truckNew} truck3={true} tasks={tasks2}/>
        </div>
    )
}
*/

/*
function App() {

    let tasks1: Array<TaskType> = [
        {id: 1, title: "CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "React", isDone: false},
    ]

    let tasks2: Array<TaskType> = [
        {id: 1, title: "Terminator", isDone: true},
        {id: 2, title: "XXX", isDone: false},
        {id: 3, title: "Jentlments of fortune", isDone: true},
    ]

    return (
        <div className='App'>
            <Todolist title="What to learn" tasks={tasks1}/>
            <Todolist title="Movies" tasks={tasks2}/>
        </div>
    )
}
*/


/*
function App() {
    const tasks1 = [
        {id: 1, title: 'HTML&CSS', isDone: true},
        {id: 2, title: 'JS', isDone: true},
        {id: 3, title: 'ReactJS', isDone: false}
    ]
    const tasks2 = [
        {id: 1, title: 'Hello world', isDone: true},
        {id: 2, title: 'I am happy', isDone: true},
        {id: 3, title: 'Yo', isDone: false}
    ]

    return (
        <div className="App">
                <Todolist title='What to learn' tasks={tasks1}/>
                <Todolist title='Songs' tasks={tasks2}/>
        </div>
    );
}
*/

export default App;


