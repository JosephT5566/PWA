import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import AddCircleOutline from '@material-ui/icons/AddCircleOutline';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

import './styles.scss';

export default function PhotoUpload() {
    const [picture, setPicture] = useState(null);
    const [active, setActive] = useState('');
    const { t } = useTranslation();
    const inputRef = useRef(null);
    const imageRef = useRef(null);

    // the FileList of <input/> is readonly
    const onFilesChange = () => {
        const files = inputRef.current.files;
        if (files && files[0]) {
            setPicture(files[0]);
            setActive('active');

            let reader = new FileReader();
            reader.onload = (e) => {
                imageRef.current.src = e.target.result;
            };
            reader.readAsDataURL(files[0]);
            inputRef.current.value = ''; // remove value
        }
    };

    const onDeleteImage = () => {
        setActive('');
        setPicture(null);
    };

    return (
        <Card className="card-outer" variant="outlined">
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
                        <img src="" ref={imageRef} />
                        <IconButton className="delete-icon" onClick={onDeleteImage}>
                            <DeleteIcon />
                        </IconButton>
                    </div>
                </div>
            </Card>
        </Card>
    );
}
