import React, {FC} from 'react';
import './App.css'
import {Button} from './Button';
import {TasksList} from './TasksList';

export type TodoListPropsType = {
    title: string
    tasks: TaskType[]
    removeTask: (taskId: number) => void
}

export type TaskType = {
    id: number,
    title: string,
    isDone: boolean
}

export const TodoList: FC<TodoListPropsType> = ({title, tasks, removeTask}) => {
    //1.
    //const title = props.title
    //const tasks: Array<TaskType> = props.tasks

    //2.
    //const {title: myTitle, tasks: myTasks} = props

    //3.
    //const {title, tasks} = props

    return (
        <div className="todoList">
            <h3>{title}</h3>
            <div>
                <input/>
                <Button name={'+'}/>
            </div>
            <TasksList tasks={tasks} removeTask={removeTask}/>
        </div>
    )
}