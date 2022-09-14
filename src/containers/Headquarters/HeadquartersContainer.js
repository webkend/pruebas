import React, { Fragment } from 'react';
import AppLayout from '../../components/Layout/index';
import Headquarters from '../../components/Admin/Headquarters/Headquarters';
import { headquartersRoute } from '../../routers/routes';

const HeadquartersContainer = () => {
    return (
        <Fragment>
            <AppLayout body={<Headquarters />} titlePage="Nuestras sedes" slug={headquartersRoute} />
        </Fragment>
    );
}


export default HeadquartersContainer;