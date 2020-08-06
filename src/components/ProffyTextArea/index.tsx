import React, { TextareaHTMLAttributes } from 'react';

import './styles.css';

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    name: string, label: string
};

const TextArea: React.FC<Props> = ({ name, label, ...rest }) => {

    return (
        <div className="textarea-block">
            <label htmlFor={name}>{label}</label>
            <textarea id={name} name={name} {...rest} />
        </div>
    )

}

export default TextArea;