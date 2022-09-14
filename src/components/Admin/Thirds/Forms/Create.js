import React from 'react'
import { Link } from 'react-router-dom';
import { thirdsRoute } from '../../../../routers/routes';
import Form from './Form';

const CreateThirds = () => {
    return (
        <section className='admin__thirds admin__form'>
            <div className='heading'>
                <h2>Nueva entidad</h2>
                <div className='functions'>
                    <Link to={thirdsRoute}>
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

export default CreateThirds;