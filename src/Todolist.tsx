import React, {ChangeEvent, FC, useState, KeyboardEvent} from 'react';
import './App.css'
import {Button} from './Button';
import {TasksList} from './TasksList';

export type TodoListPropsType = {
    title: string
    tasks: TaskType[]
    removeTask: (taskId: string) => void
    addTask: (title: string) => void
}

export type TaskType = {
    id: string,
    title: string,
    isDone: boolean
}

export const TodoList: FC<TodoListPropsType> = ({
                                                    title,
                                                    tasks,
                                                    removeTask,
                                                    addTask
                                                }) => {
    const [newTaskTitle, setNewTaskTitle] = useState('')
    const maxTitleLengthError = newTaskTitle.length >= 20
    const onClickAddTask = () => {
        addTask(newTaskTitle)
        setNewTaskTitle('')
    }
    const OnChangeSetTitle = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.value.length <= 20) {
            setNewTaskTitle(e.currentTarget.value)
        }
    }
    const onKeyDownAddTask = (e: KeyboardEvent<HTMLInputElement>) => {
        e.key === 'Enter'
        && !!newTaskTitle
        && newTaskTitle.length < 20
        && onClickAddTask()
    }
    return (
        <div className="todoList">
            <h3>{title}</h3>
            <div>
                <input
                    value={newTaskTitle}
                    onChange={OnChangeSetTitle}
                    onKeyDown={onKeyDownAddTask}
                />
                <Button name="+"
                        onClickHandler={onClickAddTask}
                        disabled={!newTaskTitle || maxTitleLengthError}/>
                {maxTitleLengthError && <div style={{color: 'red'}}>Your task title is too long</div>}
            </div>
            <TasksList tasks={tasks} removeTask={removeTask}/>
        </div>
    )
}