import React from 'react'

interface buttonProps {
    label: string;
    className: string;
    onClick(): any;
}
const Button: React.FC<buttonProps> = ({ label, className, onClick }) => {
    return (
        <button className={className} onClick={onClick} >{label}</button>
    )
}

export default Button
