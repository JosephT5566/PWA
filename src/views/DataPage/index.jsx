import React from 'react';

import Title from '../../components/Title/Title';
import Victory from '../../components/Victory';

import Divider from '@material-ui/core/Divider';
// import { makeStyles } from '@material-ui/core/styles';

// const useStyle = makeStyles((theme) => ({}));

export default function DataPage() {
    // const classes = useStyle();
    return (
        <div>
            <Title title="Data" />
            <Divider />
            <div className="ui container">
                <Victory />
            </div>
        </div>
    );
}
