import React, {FC} from 'react';

type ButtonPropsType = {
    name: string
    onClickHandler?: () => void
}
export const Button: FC<ButtonPropsType> = ({name, onClickHandler}) => {
    return <button onClick={onClickHandler}>{name}</button>
}