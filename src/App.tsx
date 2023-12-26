import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {v1} from 'uuid';

export type FilterValuesType = 'all' | 'completed' | 'active'

function App() {

    let tasks1 = [
        {id: v1(), title: 'HTML&CSS', isDone: true},
        {id: v1(), title: 'JS', isDone: true},
        {id: v1(), title: 'ReactJS', isDone: false}
    ]

    const [filter, setFilter] = useState<FilterValuesType>('all')

    const [tasks, setTasks] = useState(tasks1)

    const changeFilter = (FilterType: FilterValuesType) => setFilter(FilterType)

    const changeStatus = (taskId: string, isDone: boolean) => {
        let task = tasks.find(t => t.id === taskId)
        if (task) {
            task.isDone = isDone
        }
        setTasks([...tasks])
    }

    let tasksForTodoList = tasks

    if (filter === 'active') {
        tasksForTodoList = tasksForTodoList.filter(task => !task.isDone)
    }
    if (filter === 'completed') {
        tasksForTodoList = tasksForTodoList.filter(task => task.isDone)
    }

    const removeTask = (id: string) => {
        setTasks(tasks.filter((t) => t.id !== id))
    }

    const addTask = (taskTitle: string) => {
        const newTask = {id: v1(), title: taskTitle, isDone: false}
        setTasks([newTask, ...tasks])
    }

    return (
        <div className="App">
            <Todolist title="What to learn" tasks={tasksForTodoList} removeTask={removeTask} changeFilter={changeFilter} addTask={addTask} changeTaskStatus={changeStatus} filter ={filter}/>
        </div>
    );
}

export default App;