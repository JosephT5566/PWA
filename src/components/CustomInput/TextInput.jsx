import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';

function TextInput({ autoComplete = 'off', label, type = 'text', required = false, getValue, ...props }) {
    const [value, setValue] = useState('');

    useEffect(() => {
        if (getValue) getValue(value);
    }, [value, getValue]);

    const onValueChanged = (event) => {
        setValue(event.target.value);
    };

    const labelProps = {
        shrink: true,
    };

    return (
        <TextField
            required={required}
            error={props.error}
            className="input text"
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
