import React from 'react';
import exp from 'constants';
import {FilterValuesType} from './App';

type PropsType = {
    truck: string
    truck2?: number
    truck3?: boolean
    /*    tasks: Array<TaskType>*/
    tasks: TaskType[]
    removeTask: (id: number) => void
    changeFilter: (value: FilterValuesType) => void
}
export type TaskType = {
    id: number
    title: string
    isDone: boolean
}
export const Todolist = (props: PropsType) => {
    return (
        <div>
            <h3>{props.truck}</h3>
            <h3>{props.truck2}</h3>
            <h3>{props.truck3}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {
                    props.tasks.map(t => <li><input type="checkbox" checked={t.isDone}/>
                        <span>{t.title}</span>
                        <button onClick={() => { props.removeTask(t.id)}}>x</button>
                    </li>)

                }
                {/*                {props.tasks.map((el)=>{
                    return(
                        <li><input type="checkbox" checked={el.isDone}/>
                            <span>{el.title}</span></li>
                    )
                })}*/}
                {/*                <li><input type="checkbox" checked={props.tasks[0].isDone}/> <span>{props.tasks[0].title}</span></li>
                <li><input type="checkbox" checked={props.tasks[1].isDone}/> <span>{props.tasks[1].title}</span></li>
                <li><input type="checkbox" checked={props.tasks[2].isDone}/> <span>{props.tasks[2].title}</span></li>
                <li><input type="checkbox" checked={props.tasks[3].isDone}/> <span>{props.tasks[3].title}</span></li>*/}
            </ul>
            <div>
                <button onClick={()=>{props.changeFilter('all')}}>All</button>
                <button onClick={()=>{props.changeFilter('active')}}>Active</button>
                <button onClick={()=> {props.changeFilter('completed')}}>Completed</button>
            </div>
        </div>
    )
}