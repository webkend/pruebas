import React, { Fragment } from 'react';
import AppLayout from '../../components/Layout/index';
import Thirds from '../../components/Admin/Thirds/Thirds';
import { thirdsRoute } from '../../routers/routes';

const ThirdsContainer = () => {
    return (
        <Fragment>
            <AppLayout body={<Thirds />} titlePage="Terceros" slug={thirdsRoute} />
        </Fragment>
    );
}


export default ThirdsContainer;