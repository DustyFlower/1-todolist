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

    const listItems: Array<JSX.Element> = []
    for (let i = 0; i < tasks.length; i++) {
        const onClickRemoveTask = () => removeTask(tasks[i].id)
        listItems.push(<TasksList {...tasks[i]} removeTask={onClickRemoveTask}/>)
    }

    return (
        <div className="todoList">
            <h3>{title}</h3>
            <div>
                <input/>
                <Button name={'+'}/>
            </div>
            <ul>
                {listItems}
                {/*                {tasks.map(el =>
                    <li><input type="checkbox" checked={el.isDone}/> <span>{el.title}</span></li>
                )}*/}
            </ul>
            <div>
                <Button name={'All'}/>
                <Button name={'Active'}/>
                <Button name={'Completed'}/>
            </div>
        </div>
    )
}