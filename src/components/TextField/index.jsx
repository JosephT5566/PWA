import React from 'react';
import PasswordInput from './PasswordInput';
import TextInput from './TextInput';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles(() => ({
    textField: {
        margin: '0.5em 0',
    },
}));

export default function TextField({ autoComplete, label, type }) {
    const classes = useStyle();
    switch (type) {
        case 'password':
            return <PasswordInput className={classes.textField} label={label} />;
        default:
            return <TextInput className={classes.textField} autoComplete={autoComplete} label={label} type={type} />;
    }
}
