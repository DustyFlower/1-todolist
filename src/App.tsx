import React, {useState} from 'react';
import './App.css';
import {TaskType, TodoList} from './TodoList';

//CRUD:
//create
//read
//update
//delete

function App() {
//BLL:
    const todoListTitle: string = 'What to learn'

    //state
    /*    let tasks: Array<TaskType> = [
            {id: 1, title: 'HTML&CSS', isDone: true},
            {id: 1, title: 'JS/ES6', isDone: true},
            {id: 1, title: 'React', isDone: false}
        ]*/

    const [tasks, setTasks] = useState<Array<TaskType>>([
        {id: 1, title: 'HTML&CSS', isDone: true},
        {id: 2, title: 'JS/ES6', isDone: true},
        {id: 3, title: 'React', isDone: false}
    ])

    //delete
    const removeTask = (taskId: number) => {
        const nextState: Array<TaskType> = []
        for (let i = 0; i < tasks.length; i++) {
            if (tasks[i].id !== taskId) {
                nextState.push(tasks[i])
            }
        }
        setTasks(nextState)
    }

//UI:
    return (
        <div className="App">
            <TodoList title={todoListTitle}
                      tasks={tasks}
                      removeTask={removeTask}
            />
            {/*            TodoList(
                {
                title: 'What to learn',
                tasks: tasks,
                removeTask: removeTask
                }
            )*/}
        </div>
    );
}

export default App;
