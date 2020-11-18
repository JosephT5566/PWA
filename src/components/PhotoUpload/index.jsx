import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import AddCircleOutline from '@material-ui/icons/AddCircleOutline';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import Slide from '@material-ui/core/Slide';

import './styles.scss';

export default function PhotoUpload({
    className,
    title,
    required = false,
    value = '',
    handleChange = null,
    isSubmit,
    disable = false,
    direction = 'horizontal', // horizontal | straight
    sizeMax = null, // Bytes
}) {
    const [active, setActive] = useState(value === '' ? '' : 'active');
    const [error, setError] = useState('');
    const [open, setOpen] = useState(false);
    const { t } = useTranslation();
    const inputRef = useRef(null);
    const imageRef = useRef(null);
    const requiredMark = required ? '*' : '';
    const disableClass = disable ? 'disable' : '';

    // the FileList of <input/> is readonly
    const onFilesChange = () => {
        const files = inputRef.current.files;
        if (files && files[0]) {
            if (sizeMax && files[0].size > sizeMax) {
                setOpen(true);
            } else {
                let reader = new FileReader();
                reader.onload = (e) => {
                    if (handleChange) handleChange(e.target.result);
                };
                reader.readAsDataURL(files[0]);
            }
            inputRef.current.value = ''; // remove value
        }
    };

    const onDeleteImage = () => {
        if (handleChange) handleChange('');
    };

    const handleCloseSnackbar = () => {
        setOpen(false);
    };

    useEffect(() => {
        if (value !== '') {
            imageRef.current.src = value;
            setActive('active');
        } else {
            setActive('');
        }
    }, [value]);

    useEffect(() => {
        if (isSubmit) {
            if (required && !value) {
                setError('error');
            } else {
                setError('');
            }
        }
    }, [isSubmit, required, value, setError]);

    const openImage = (data) => {
        // console.log(data);
        var image = new Image();
        image.src = data;

        if (data.includes('http')) {
            window.open(data);
        } else {
            var w = window.open('');
            w.document.write(image.outerHTML);
            w.document.close();
        }
    };

    return (
        <div id="photo-upload" className={className}>
            <h4 className={`title ${error}`}>{`${title} ${requiredMark}`}</h4>
            <Card className={`card-outer ${error}`} variant="outlined">
                <Card className="card-inner" variant="outlined">
                    <div className={`content ${direction}`}>
                        <CardActionArea
                            className={`update-action ${active}`}
                            onClick={() => {
                                inputRef.current.click();
                            }}
                        >
                            <input ref={inputRef} type="file" accept=".png,.jpg,.bmp,.gif" onChange={onFilesChange} />
                            <div className="label">
                                <AddCircleOutline className="icon" />
                                <h5>{t('upload-pic')}</h5>
                            </div>
                        </CardActionArea>
                        <div className={`ready-action ${active}`}>
                            <img src="" ref={imageRef} alt="" onClick={() => openImage(imageRef.current.src)} />
                            <IconButton className={`delete-icon ${disableClass}`} onClick={onDeleteImage}>
                                <DeleteIcon />
                            </IconButton>
                        </div>
                    </div>
                </Card>
            </Card>
            <Snackbar
                className="snackbar"
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                open={open}
                onClose={handleCloseSnackbar}
                TransitionComponent={Slide}
                message={`檔案超過 ${sizeMax/1024}KB`}
            />
        </div>
    );
}
