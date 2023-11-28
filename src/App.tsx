import React, {useState} from 'react';
import './App.css';
import {TaskType, TodoList} from './TodoList';
import {v1} from 'uuid';

//CRUD:
//create
//read +
//update +
//delete +

function App() {
//BLL:
    const todoListTitle: string = 'What to learn'

    const [tasks, setTasks] = useState<Array<TaskType>>([
        {id: v1(), title: 'HTML&CSS', isDone: true},
        {id: v1(), title: 'JS/ES6', isDone: true},
        {id: v1(), title: 'React', isDone: false}
    ])

    //delete
    const removeTask = (taskId: string) => {
        setTasks(tasks.filter(t => t.id !== taskId))
    }

    //create task
    const addTask = (title: string) => {
        const newTask: TaskType = {
            id: v1(),
            title: title,
            isDone: false
        }
        setTasks([newTask, ...tasks])
    }

//UI:
    return (
        <div className="App">
            <TodoList title={todoListTitle}
                      tasks={tasks}
                      removeTask={removeTask}
                      addTask={addTask}
            />
        </div>
    );
}

export default App;
