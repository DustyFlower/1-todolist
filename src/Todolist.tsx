import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {ButtonNameType} from './App';

type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (id: string) => void
    addTask: (title: string) => void
}

export function Todolist(props: PropsType) {

    let [filteredButtonName, setFilteredButtonName] = useState<ButtonNameType>('All')

    const filterTasks = (buttonName: ButtonNameType) => {
        setFilteredButtonName(buttonName)
    }

    const filteredTasks = () => {

        switch (filteredButtonName) {
            case 'Active':
                return props.tasks.filter(el => !el.isDone);
            case 'Completed':
                return props.tasks.filter(el => el.isDone);
            default:
                return props.tasks
        }
    }

    const [newTaskTitle, setNewTaskTitle] = useState('')

    const onNewTitleChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTaskTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.ctrlKey && e.charCode === 13) {
            props.addTask(newTaskTitle)
            setNewTaskTitle('')
        }
    }

    const addTask = () => {
        props.addTask(newTaskTitle)
        setNewTaskTitle('')
    }

    return <div>
        <h3>{props.title}</h3>
        <div>
            <input value={newTaskTitle}
                   onChange={onNewTitleChangeHandler}
                   onKeyPress={onKeyPressHandler}
            />
            <button onClick={addTask}>+</button>
        </div>
        <ul>
            {filteredTasks().map(t => {

                const onRemoveHandler = () => {
                    props.removeTask(t.id)
                }
                return (
                    <li key={t.id}>
                        <button onClick={onRemoveHandler}>x</button>
                        <input type="checkbox" checked={t.isDone}/>
                        <span>{t.title}</span></li>
                )
            })}
        </ul>
        <div>
            <button onClick={() => filterTasks('All')}>All</button>
            <button onClick={() => filterTasks('Active')}>Active</button>
            <button onClick={() => filterTasks('Completed')}>Completed</button>
        </div>
    </div>
}