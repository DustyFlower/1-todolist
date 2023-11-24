import React, {FC} from 'react';
import {TaskType} from './TodoList';
import {Button} from './Button';

type TaskPropsType = {
    removeTask: (taskId: number) => void
}

export const TasksList: FC<TaskType & TaskPropsType> = ({id, title,isDone, removeTask}) => {
    return (
        <>
            <li>
                <Button name={'x'} onClickHandler={()=>removeTask(id)}/>
                <input type="checkbox" checked={isDone}/>
                <span>{title}</span>
            </li>
        </>
    )
}