import React, { Fragment } from 'react';
import AppLayout from '../../components/Layout/index';
import Headquarters from '../../components/Admin/Headquarters/Forms/Create';
import { createHeadquartersRoute } from '../../routers/routes';

const CreateHeadquartersContainer = () => {
    return (
        <Fragment>
            <AppLayout body={<Headquarters />} titlePage="Nueva sede" slug={createHeadquartersRoute} />
        </Fragment>
    );
}


export default CreateHeadquartersContainer;