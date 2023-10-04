import React, {useState} from 'react';
import {ButtonNameType} from './App';

type TaskType = {
    id: number
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (id: number) => void
}

export function Todolist(props: PropsType) {

    let [filterButtonName, setButtonName] = useState<ButtonNameType>('All')

    const filterTasks = (buttonName: ButtonNameType) => {
        setButtonName(buttonName)
    }
    const filteredTasks = () => {
        switch (filterButtonName) {
            case 'Active': {
                return props.tasks.filter(el => !el.isDone)
            }
            case 'Completed': {
                return props.tasks.filter(el => el.isDone)
            }
            default: {
                return props.tasks
            }
        }

    }

    return <div>
        <h3>{props.title}</h3>
        <div>
            <input/>
            <button>+</button>
        </div>
        <ul>
            {filteredTasks().map(t => {
                return (
                    <li key={t.id}>
                        <button onClick={() => props.removeTask(t.id)}>x</button>
                        <input type="checkbox" checked={t.isDone}/>
                        <span>{t.title}</span>
                    </li>
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
