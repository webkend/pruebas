import React, { Fragment } from 'react';
import AppLayout from '../../components/Layout/index';
import Team from '../../components/Admin/Team/Team';
import { teamRoute } from '../../routers/routes';

const TeamContainer = () => {
    return (
        <Fragment>
            <AppLayout body={<Team />} titlePage="Mi equipo" slug={teamRoute} />
        </Fragment>
    );
}


export default TeamContainer;