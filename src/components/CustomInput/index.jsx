import React from 'react';
import PasswordInput from './PasswordInput';
import TextInput from './TextInput';
import './styles.scss';

export default function CustomInput({ autoComplete, label, type }) {
    const renderInput = () => {
        switch (type) {
            case 'password':
                return <PasswordInput label={label} />;
            default:
                return (
                    <TextInput autoComplete={autoComplete} label={label} type={type} />
                );
        }
    };
    return <div className="textField">{renderInput()}</div>;
}
