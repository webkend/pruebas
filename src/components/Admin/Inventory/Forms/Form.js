import React, { useRef } from 'react'
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { inventoryRoute } from '../../../../routers/routes';
import { createInventory } from '../Services/ServicesInventory';

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

        createInventory(data)
            .then(() => {

                Swal.fire({
                    icon: 'success',
                    title: '¡Registro <b style="color:#a5dc86">exitoso!</b>',
                    showConfirmButton: false,
                    timer: 1600,
                    customClass: 'modal-alert'
                }).then((result) => {
                    if (result) {
                        navigate(`..${inventoryRoute}`, { replace: true });
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
                <label htmlFor="local" className="form-label">Categoría</label>
                <select className="form-select" required aria-label="select example">
                    <option value="">Seleccione una categoría...</option>
                    <option value="1">Producto</option>
                    <option value="2">Servicio</option>
                </select>
                <div className="valid-feedback">
                    Looks good!
                </div>
            </div>
            <div className="col-md-6">
                <label htmlFor="name" className="form-label">Nombre del producto o servicio</label>
                <input type="text" className="form-control" id="name" placeholder='Ingrese un nombre' name="name" />
                <div className="valid-feedback">
                    Looks good!
                </div>
            </div>
            <div className="col-md-4">
                <label htmlFor="local" className="form-label">Cantidad</label>
                <input type="number" min="0" className="form-control" id="local" placeholder='Ingrese la cantidad' name="value" />
                <div className="valid-feedback">
                    Looks good!
                </div>
            </div>
            <div className="col-md-4">
                <label htmlFor="local" className="form-label">Valor costo</label>
                <input type="number" min="0" className="form-control" id="local" placeholder='Ingrese un valor' name="value" />
                <div className="valid-feedback">
                    Looks good!
                </div>
            </div>
            <div className="col-md-4">
                <label htmlFor="local" className="form-label">Valor venta</label>
                <input type="number" min="0" className="form-control" id="local" placeholder='Ingrese un valor' name="value" />
                <div className="valid-feedback">
                    Looks good!
                </div>
            </div>
            <div className="col-md-12">
                <label htmlFor="address" className="form-label">Descripción</label>
                <textarea className="form-control" id="validationTextarea" placeholder="Ingrese una descripción" name="description" required></textarea>
                <div className="invalid-feedback">
                    Please choose a username.
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