import React, {FC} from 'react';

type ButtonPropsType = {
    name: string
    onClickHandler: () => void
    disabled?: boolean
}
export const Button: FC<ButtonPropsType> = ({name, onClickHandler, disabled}) => {
    return <button
        disabled={disabled}
        onClick={onClickHandler}>{name}</button>
}