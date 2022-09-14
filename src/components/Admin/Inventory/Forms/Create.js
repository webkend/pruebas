import React from 'react'
import { Link } from 'react-router-dom';
import { inventoryRoute } from '../../../../routers/routes';
import Form from './Form';

const CreateProducts = () => {
    return (
        <section className='admin__inventory admin__form'>
            <div className='heading'>
                <h2>Nuevo item</h2>
                <div className='functions'>
                    <Link to={inventoryRoute}>
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

export default CreateProducts;