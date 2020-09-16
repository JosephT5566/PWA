import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';

function TextInput({ className, autoComplete = 'off', label, type = 'text' }) {
    const [value, setValue] = useState('');

    const onValueChanged = (event) => {
        setValue(event.target.value);
    };

    const labelProps = {
        shrink: true,
    };
    return (
        <TextField
            className={className}
            fullWidth
            variant="outlined"
            InputLabelProps={labelProps}
            autoComplete={autoComplete}
            label={label}
            type={type}
            onChange={onValueChanged}
            value={value}
        />
    );
}

export default TextInput;
