import React, {FC} from 'react';

type ButtonPropsType = {
    name: string
}
export const Button: FC<ButtonPropsType> = ({name}) => {
    return <button>{name}</button>
}