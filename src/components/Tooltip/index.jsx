import React, { useState } from 'react';

import MaterialTooltip from '@material-ui/core/Tooltip';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import IconButton from '@material-ui/core/IconButton';
import HelpIcon from '@material-ui/icons/Help';

import './styles.scss';

export default function Tooltip({ label }) {
    const [open, setOpen] = useState(false);

    const handleTooltipClose = () => {
        setOpen(false);
    };

    const handleTooltipOpen = () => {
        setOpen(true);
    };

    return (
        <div id="tooltip">
            <ClickAwayListener onClickAway={handleTooltipClose}>
                <MaterialTooltip
                    className="tooltip"
                    PopperProps={{
                        disablePortal: true,
                        popperOptions: {
                            modifiers: {
                                offset: {
                                    enabled: true,
                                    offset: '0, -25em',
                                },
                            },
                        },
                    }}
                    onClose={handleTooltipClose}
                    open={open}
                    disableFocusListener
                    disableHoverListener
                    disableTouchListener
                    title={label}
                >
                    <IconButton onClick={handleTooltipOpen}>
                        <HelpIcon />
                    </IconButton>
                </MaterialTooltip>
            </ClickAwayListener>
        </div>
    );
}
