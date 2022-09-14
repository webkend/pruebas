import React, { useRef } from 'react'
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { headquartersRoute } from '../../../../routers/routes';
import { createHeadquarter } from '../Services/ServicesHeadquarters';

const Form = () => {
    const navigate = useNavigate();
    const form = useRef(null)

    const getFormData = (dataForm) => {
        const object = {};
        dataForm.forEach(function(value, key){
            object[key] = value;
        });
        const res = JSON.stringify(object);
        return res
	};

    const handleSubmit = (e) => {
        e.preventDefault()

        const dataForm = new FormData(form.current)
        const data = getFormData(dataForm)

        console.log('data', data);

        createHeadquarter(data)
            .then(() => {

                Swal.fire({
                    icon: 'success',
                    title: '¡Registro <b style="color:#a5dc86">exitoso!</b>',
                    showConfirmButton: false,
                    timer: 1600,
                    customClass: 'modal-alert'
                }).then((result) => {
                    if (result) {
                        navigate(`..${headquartersRoute}`, { replace: true });
                    }
                })

            })
            .catch((err) => {
                console.log('error', err);

                Swal.fire({
                    icon: 'error',
                    title: 'Ha ocurrido un <b style="color:#f27474">error</b>',
                    text: '¡Vuelve a intentarlo!',
                    showConfirmButton: true,
                    confirmButtonText: 'Volver',
                    confirmButtonColor: '#3182ce',
                    customClass: 'modal-alert'
                })

            });
    };

    return (
        // required
        <form className="admin__forms row g-3 needs-validation" noValidate ref={form} onSubmit={handleSubmit}>
            <div className="col-md-6">
                <label htmlFor="name" className="form-label">Nombre de la sede</label>
                <input type="text" className="form-control" id="name" placeholder='Ingrese un nombre' name="name" />
                <div className="valid-feedback">
                    Looks good!
                </div>
            </div>
            <div className="col-md-6">
                <label htmlFor="local" className="form-label">Local</label>
                <input type="text" className="form-control" id="local" placeholder='Ingrese el local' name="local" />
                <div className="valid-feedback">
                    Looks good!
                </div>
            </div>
            <div className="col-md-6">
                <label htmlFor="address" className="form-label">Dirección</label>
                <input type="text" className="form-control" id="address" placeholder='Ingrese la derección' name="address" />
                <div className="invalid-feedback">
                    Please choose a username.
                </div>
            </div>
            <div className="col-md-6">
                <label htmlFor="phone" className="form-label">Teléfono</label>
                <input type="text" className="form-control" id="phone" placeholder='Ingrese el teléfono'name="phone" />
                <div className="invalid-feedback">
                    Please provide a valid city.
                </div>
            </div>
            <div className="col-12">
                <div className='form-button'>
                    <button className="btn btn-primary" type="submit">Guardar</button>
                </div>
            </div>
        </form>
    )
}

export default Form;