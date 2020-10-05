import React, { useState, useEffect } from 'react';
import PasswordInput from './PasswordInput';
import TextInput from './TextInput';
import './styles.scss';

export default function CustomInput({ label, type, required, getValue, isSubmit, ...props }) {
    const [value, setValue] = useState('');
    const [error, setError] = useState(false);

    useEffect(() => {
        if (getValue) getValue(value);
    }, [value]);

    useEffect(() => {
        if (isSubmit) {
            if (required && value === '') {
                setError(true);
            } else {
                setError(false);
            }
        }
    }, [isSubmit]);

    const renderInput = () => {
        switch (type) {
            case 'password':
                return <PasswordInput label={label} required={required} error={error} getValue={setValue} />;
            default:
                return (
                    <TextInput
                        label={label}
                        type={type}
                        required={required}
                        error={error}
                        getValue={setValue}
                        autoComplete={props.autoComplete}
                    />
                );
        }
    };

    return <div className="textField">{renderInput()}</div>;
}
