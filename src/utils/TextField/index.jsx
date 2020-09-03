import React from 'react';
import PasswordInput from './PasswordInput';
import TextInput from './TextInput';

export default function TextField({ className, label, type }) {
    switch (type) {
        case 'password':
            return <PasswordInput className={className} label={label} />;
        default:
            return <TextInput className={className} label={label} type={type} />;
    }
}
