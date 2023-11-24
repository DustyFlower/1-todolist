import React, {FC, useState} from 'react';
import {Button} from './Button';
import {TaskType} from './TodoList';
import './App.css';

type TasksListPropsType = {
    tasks: TaskType[]
    removeTask: (taskId: number) => void
}

type FilterValueType = 'All' | 'Active' | 'Completed'

export const TasksList: FC<TasksListPropsType> = ({tasks, removeTask}) => {
    const [filter, setFilter] = useState<FilterValueType>('All')

    const filteredTasks: Array<TaskType> = filter === 'Active'
        ? tasks.filter(t => !t.isDone)
        : filter === 'Completed'
            ? tasks.filter(t => t.isDone)
            : tasks

    /*    const listItems: Array<JSX.Element> = []
        for (let i = 0; i < filteredTasks.length; i++) {
            const onClickRemoveTask = () => removeTask(filteredTasks[i].id)
            const listItem: JSX.Element = <li>
                <Button name={'x'} onClickHandler={onClickRemoveTask}/>
                <input type="checkbox" checked={filteredTasks[i].isDone}/>
                <span>{filteredTasks[i].title}</span>
            </li>
            listItems.push(listItem)
        }*/
    const listItems: JSX.Element = filteredTasks.length === 0
        ? <span>Your list is empty.</span>
        :<ul>
            {filteredTasks.map(t => {
                const onClickRemoveTask = () => removeTask(t.id)
                return (
                    <li>
                        <Button name={'x'} onClickHandler={onClickRemoveTask}/>
                        <input type="checkbox" checked={t.isDone}/>
                        <span>{t.title}</span>
                    </li>
                )
            })}
        </ul>
    const onClickSetAllFilter = () => setFilter('All')
    return (
        <div className='tasksList'>
                {listItems}
            <div>
                <Button name="All" onClickHandler={onClickSetAllFilter}/>
                <Button name="Active" onClickHandler={() => setFilter('Active')}/>
                <Button name="Completed" onClickHandler={() => setFilter('Completed')}/>
            </div>
        </div>
    )
}