import React, { Fragment } from 'react';
import AppLayout from '../../components/Layout/index';
import Team from '../../components/Admin/Team/Forms/Create';
import { createTeamRoute } from '../../routers/routes';

const CreateTeamContainer = () => {
    return (
        <Fragment>
            <AppLayout body={<Team />} titlePage="Nuevo colaborador" slug={createTeamRoute} />
        </Fragment>
    );
}


export default CreateTeamContainer;