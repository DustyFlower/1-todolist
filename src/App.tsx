import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {v1} from 'uuid';

export type ButtonNameType = 'All' | 'Active' | 'Completed'

function App() {

    let [tasks, setTasks] = useState(
        [
            {id: v1(), title: 'HTML&CSS', isDone: true},
            {id: v1(), title: 'JS', isDone: true},
            {id: v1(), title: 'ReactJS', isDone: false},
            {id: v1(), title: 'Rest API', isDone: false},
            {id: v1(), title: 'GraphQL', isDone: false}
        ])

    const removeTask = (id: string) => {
        /*        tasks = tasks.filter(el=> el.id !== id)*/
        setTasks(tasks.filter(el => el.id !== id))
    }

    const addTask = (title: string) => {
        let newTask = {id: v1(), title: title, isDone: false}
        let newTasks = [newTask, ...tasks];
        setTasks(newTasks)
    }

    return (
        <div className="App">
            <Todolist title="What to learn"
                      tasks={tasks}
                      removeTask={removeTask}
                      addTask={addTask}/>
        </div>
    );

}

export default App;
