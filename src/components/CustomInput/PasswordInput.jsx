import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';

function PasswordInput({ label, required, getValue, ...props }) {
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        if (getValue) getValue(password);
    }, [password, getValue]);

    const onIconClicked = () => {
        setShowPassword(!showPassword);
    };
    const onValueChanged = (event) => {
        setPassword(event.target.value);
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

    return (
        <TextField
            className="input pwd"
            required={required}
            error={props.error}
            fullWidth
            InputProps={inputProps}
            variant="outlined"
            InputLabelProps={labelProps}
            type={showPassword ? 'text' : 'password'}
            label={label}
            onChange={onValueChanged}
            value={password}
        />
    );
}

export default PasswordInput;
