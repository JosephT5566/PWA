import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';

import './styles.scss';

function TextInput({
    label,
    type = 'text',
    required = false,
    retriveValue = null,
    isSubmit,
    autoComplete = 'off',
    ...props
}) {
    const [value, setValue] = useState('');
    const [error, setError] = useState(false);

    const onValueChanged = (event) => {
        setValue(event.target.value);
        if (retriveValue) retriveValue(event.target.value);
    };

    const labelProps = {
        shrink: true,
    };

    useEffect(() => {
        if (isSubmit) {
            if (required && value === '') {
                setError(true);
            } else {
                setError(false);
            }
        }
    }, [isSubmit, required, value, setError]);

    return (
        <div className="textField">
            <TextField
                className="input text"
                label={label}
                type={type}
                required={required}
                error={error}
                fullWidth
                variant="outlined"
                InputLabelProps={labelProps}
                autoComplete={autoComplete}
                onChange={onValueChanged}
                value={value}
                placeholder={props.placeholder}
            />
        </div>
    );
}

export default TextInput;
