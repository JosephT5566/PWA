import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';

function TextInput({ className, label }) {
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
            label={label}
            onChange={onValueChanged}
            value={value}
        />
    );
}

export default TextInput;
