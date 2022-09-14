import React, { Fragment } from 'react';
import AppLayout from '../../components/Layout/index';
import Inventory from '../../components/Admin/Inventory/Inventory';
import { inventoryRoute } from '../../routers/routes';

const InventoryContainer = () => {
    return (
        <Fragment>
            <AppLayout body={<Inventory />} titlePage="Productos y servicios" slug={inventoryRoute} />
        </Fragment>
    );
}


export default InventoryContainer;