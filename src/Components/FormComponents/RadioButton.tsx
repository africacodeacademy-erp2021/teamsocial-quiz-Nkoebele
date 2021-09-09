import React from 'react'

interface RadioProps {
    label: string;
    value: string;

}

const RadioButton: React.FC<RadioProps> = ({ label, value}) => {

    return (
        <p>
            <label>
                <input type="radio" value={value} name="questions" />
                <span>{label}</span>
            </label>

        </p>
    )
}

export default RadioButton
