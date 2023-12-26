import React, {ChangeEvent, KeyboardEvent, FC, useState} from 'react';
import {FilterValuesType} from './App';
import {log} from 'util';
import {Simulate} from 'react-dom/test-utils';
import error = Simulate.error;

type PropsType = {
    title: string
    tasks: TaskType[]
    removeTask: (taskId: string) => void
    changeFilter: (FilterType: FilterValuesType) => void
    addTask: (taskTitle: string) => void
    changeTaskStatus: (taskId: string, isDone: boolean) => void
    filter: FilterValuesType
}

type TaskType = {
    id: string
    title: string
    isDone: boolean
}

export const Todolist: FC<PropsType> = ({title, tasks, removeTask, changeFilter, addTask, changeTaskStatus, filter}) => {
    const [taskTitle, setTaskTitle] = useState('')
    const [error, setError] = useState<string | null>(null)

    const onAllClickHandler = () => {
        changeFilter('all')
    }
    const onActiveClickHandler = () => {
        changeFilter('active')
    }
    const onCompletedClickHandler = () => {
        changeFilter('completed')
    }

    const onClickAddTaskHandler = () => {
        if (taskTitle.trim() !== '') {
            addTask(taskTitle.trim())
            setTaskTitle('')
        } else {
            setError('Title is required')
        }}

        const onChangeAddTaskHandler = (event: ChangeEvent<HTMLInputElement>) => {
            setTaskTitle(event.currentTarget.value)
        }

        const onKeyUpHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        setError(null)
            if (event.ctrlKey && event.key === 'Enter') {
                onClickAddTaskHandler()
            }
        }
        return (
            <div>
                <h3>{title}</h3>
                <div>
                    <input value={taskTitle}
                           onChange={onChangeAddTaskHandler}
                           onKeyUp={onKeyUpHandler}
                           className={error ? 'error' : ''}/>
                    <button onClick={onClickAddTaskHandler}>+</button>
                    {error && <div className="error-message">{error}</div>}
                </div>
                <ul>
                    {tasks.map(t => {
                        const onClickHandler = () => {
                            removeTask(t.id)
                        }
                        const onChangeCheckboxHandler = (e: ChangeEvent<HTMLInputElement>) => {
                            changeTaskStatus(t.id, e.currentTarget.checked)
                        }
                        return <li key={t.id} className={t.isDone ?'is-done' : ''}>
                            <button onClick={onClickHandler}>✖️
                            </button>
                            <input type="checkbox" onChange={onChangeCheckboxHandler} checked={t.isDone}/>
                            <span>{t.title}</span></li>
                    })}
                </ul>
                <div>
                    <button className={filter === 'all' ?'active-filter': ''} onClick={onAllClickHandler}>All</button>
                    <button className={filter === 'active' ?'active-filter': ''} onClick={onActiveClickHandler}>Active
                    </button>
                    <button className={filter === 'completed' ?'active-filter': ''} onClick={onCompletedClickHandler}>Completed</button>
                </div>
            </div>
        )
    }
