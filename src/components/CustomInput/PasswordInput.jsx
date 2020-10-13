import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';

import './styles.scss';

function PasswordInput({ label, required = false, value = '', handleChange = null, isSubmit, ...props }) {
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState(false);

    const onIconClicked = () => {
        setShowPassword(!showPassword);
    };

    const onValueChanged = (event) => {
        if (handleChange) handleChange(event.target.value);
    };

    const labelProps = {
        shrink: true,
    };

    const inputProps = {
        endAdornment: (
            <InputAdornment>
                <IconButton onClick={onIconClicked}>
                    {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </IconButton>
            </InputAdornment>
        ),
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
                className="input pwd"
                label={label}
                required={required}
                error={error}
                fullWidth
                InputProps={inputProps}
                variant="outlined"
                InputLabelProps={labelProps}
                type={showPassword ? 'text' : 'password'}
                onChange={onValueChanged}
                value={value}
                onKeyPress={props.onKeyPress}
            />
        </div>
    );
}

export default PasswordInput;
