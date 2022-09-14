import React, { Fragment } from 'react';
import AppLayout from '../../components/Layout/index';
import Thirds from '../../components/Admin/Thirds/Forms/Create';
import { createThirdsRoute } from '../../routers/routes';

const CreateThirdsContainer = () => {
    return (
        <Fragment>
            <AppLayout body={<Thirds />} titlePage="Nueva entidad" slug={createThirdsRoute} />
        </Fragment>
    );
}


export default CreateThirdsContainer;