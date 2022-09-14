import React from 'react'
import { Link } from 'react-router-dom';
import { headquartersRoute } from '../../../../routers/routes';
import Form from './Form';

const CreateHeadquarters = () => {
    return (
        <section className='admin__headquarters admin__form'>
            <div className='heading'>
                <h2>Nueva sede</h2>
                <div className='functions'>
                    <Link to={headquartersRoute}>
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

export default CreateHeadquarters;