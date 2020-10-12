import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import AddCircleOutline from '@material-ui/icons/AddCircleOutline';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

import './styles.scss';

export default function PhotoUpload({ className, title, required = false, value = '', handleChange = null, isSubmit }) {
    const [active, setActive] = useState(value === '' ? '' : 'active');
    const [error, setError] = useState('');
    const { t } = useTranslation();
    const inputRef = useRef(null);
    const imageRef = useRef(null);
    const requiredMark = required ? '*' : '';

    // the FileList of <input/> is readonly
    const onFilesChange = () => {
        const files = inputRef.current.files;
        if (files && files[0]) {
            let reader = new FileReader();
            reader.onload = (e) => {
                if (handleChange) handleChange(e.target.result);
            };
            reader.readAsDataURL(files[0]);
            inputRef.current.value = ''; // remove value
        }
    };

    const onDeleteImage = () => {
        if (handleChange) handleChange('');
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

    return (
        <div id="photo-upload" className={className}>
            <h4 className={`title ${error}`}>{`${title} ${requiredMark}`}</h4>
            <Card className={`card-outer ${error}`} variant="outlined">
                <Card className="card-inner" variant="outlined">
                    <div className="content">
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
                            <img src="" ref={imageRef} alt="" />
                            <IconButton className="delete-icon" onClick={onDeleteImage}>
                                <DeleteIcon />
                            </IconButton>
                        </div>
                    </div>
                </Card>
            </Card>
        </div>
    );
}
