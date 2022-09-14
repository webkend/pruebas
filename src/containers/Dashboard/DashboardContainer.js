import React, { Fragment } from 'react';
import AppLayout from '../../components/Layout/index';
import Dashboard from '../../components/Admin/Dashboard/Dashboard';
import { dashboardRoute } from '../../routers/routes';

const DashboardContainer = () => {
    return (
        <Fragment>
            <AppLayout body={<Dashboard />} titlePage="Dashboard" slug={dashboardRoute} />
        </Fragment>
    );
}


export default DashboardContainer;