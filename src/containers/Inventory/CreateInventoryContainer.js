import React, { Fragment } from 'react';
import AppLayout from '../../components/Layout/index';
import Inventory from '../../components/Admin/Inventory/Forms/Create';
import { createInventoryRoute } from '../../routers/routes';

const CreateInventoryContainer = () => {
    return (
        <Fragment>
            <AppLayout body={<Inventory />} titlePage="Nuevo item" slug={createInventoryRoute} />
        </Fragment>
    );
}


export default CreateInventoryContainer;