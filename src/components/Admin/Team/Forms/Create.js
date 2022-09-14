import React from 'react'
import { Link } from 'react-router-dom';
import { teamRoute } from '../../../../routers/routes';
import Form from './Form';

const CreateTeam = () => {
    return (
        <section className='admin__team admin__form'>
            <div className='heading'>
                <h2>Nuevo colaborador</h2>
                <div className='functions'>
                    <Link to={teamRoute}>
                        <button><i className="fa-solid fa-angle-left"></i> Volver</button>
                    </Link>
                </div>
            </div>
            <div className='container'>
                <div className='content-form'>
                    <Form />
                </div>
            </div>
        </section>
    )
}

export default CreateTeam;