import React from 'react'

interface RadioProps {
    label: string;
    value: string;
    checked?: boolean;
}

const RadioButton: React.FC<RadioProps> = ({ label, value, checked}) => {

    return (
        <p>
            <label>
                <input type="radio" value={value} name="questions" checked={checked} />
                <span>{label}</span>
            </label>

        </p>
    )
}

export default RadioButton
