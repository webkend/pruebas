import React, { useState, useRef, useEffect } from 'react'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';
import { teamRoute } from '../../../../routers/routes';
import { createTeam } from '../Services/ServicesTeam'
import { getRoles, getHeadquarters } from '../../../../services/App'

const Form = () => {
    const navigate = useNavigate();
    const [role, setRole] = useState([])
    const [headquarters, setHeadquarters] = useState([])
    const form = useRef(null)

    const selectRole = () => {
        getRoles()
        .then((res) => {
            setRole(res)
        })
        .catch((err) => {
            console.log('error', err);
        });
    }

    const selectHeadquarters = () => {
        getHeadquarters()
        .then((res) => {
            setHeadquarters(res)
        })
        .catch((err) => {
            console.log('error', err);
        });
    }

    useEffect(() => {
        selectRole();
        selectHeadquarters();
    }, [])

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

        createTeam(data)
            .then(() => {

                Swal.fire({
                    icon: 'success',
                    title: '¡Registro <b style="color:#a5dc86">exitoso!</b>',
                    showConfirmButton: false,
                    timer: 1600,
                    customClass: 'modal-alert'
                }).then((result) => {
                    if (result) {
                        navigate(`..${teamRoute}`, { replace: true });
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
                <label htmlFor="roleId" className="form-label">Tipo de usuario</label>
                <select className="form-select" id="roleId" name="roleId">
                    <option disabled selected value={0}>Seleccione un tipo...</option>
                    {role.map((role, index) => (
                        <option key={role.id} value={role.id}>{role.description}</option>
                    ))}
                </select>
                <div className="invalid-feedback">
                Please select a valid state.
                </div>
            </div>
            <div className="col-md-6">
                <label htmlFor="headquartersId" className="form-label">Sede</label>
                <select className="form-select" id="headquartersId" name="headquartersId">
                    <option disabled selected value="0">Seleccione una sede...</option>
                    {headquarters.map((headq, index) => (
                        <option key={headq.id} value={headq.id}>{headq.name} {headq.local}</option>
                    ))}
                </select>
                <div className="invalid-feedback">
                Please select a valid state.
                </div>
            </div>
            <div className="col-md-6">
                <label htmlFor="firstName" className="form-label">Primer nombre</label>
                <input type="text" className="form-control" id="firstName" placeholder='Ingrese un nombre' name="firstName" />
                <div className="valid-feedback">
                    Looks good!
                </div>
            </div>
            <div className="col-md-6">
                <label htmlFor="secondName" className="form-label">Segundo nombre</label>
                <input type="text" className="form-control" id="secondName" placeholder='Ingrese un nombre' name="secondName" />
                <div className="valid-feedback">
                    Looks good!
                </div>
            </div>
            <div className="col-md-6">
                <label htmlFor="firstLastName" className="form-label">Primer apellido</label>
                <input type="text" className="form-control" id="firstLastName" placeholder='Ingrese un apellido' name="firstLastName" />
                <div className="invalid-feedback">
                    Please choose a username.
                </div>
            </div>
            <div className="col-md-6">
                <label htmlFor="secondLastName" className="form-label">Segundo apellido</label>
                <input type="text" className="form-control" id="secondLastName" placeholder='Ingrese un apellido'name="secondLastName" />
                <div className="invalid-feedback">
                    Please provide a valid city.
                </div>
            </div>
            <div className="col-md-6">
                <label htmlFor="email" className="form-label">Correo electrónico</label>
                <input type="email" className="form-control" id="email" placeholder='Ingrese un correo' name="email" />
                <div className="invalid-feedback">
                    Please provide a valid city.
                </div>
            </div>
            <div className="col-md-6">
                <label htmlFor="address" className="form-label">Dirección</label>
                <input type="text" className="form-control" id="address" placeholder='Ingrese una dirección' name="address" />
                <div className="invalid-feedback">
                    Please provide a valid zip.
                </div>
            </div>
            <div className="col-md-6">
                <label htmlFor="cellphone" className="form-label">Número de celular</label>
                <input type="text" className="form-control" id="cellphone" placeholder='Ingrese un número de celular' name="cellphone" />
                <div className="invalid-feedback">
                    Please provide a valid city.
                </div>
            </div>
            <div className="col-md-6">
                <label htmlFor="username" className="form-label">Nombre de usuario</label>
                <input type="text" className="form-control" id="username" placeholder='Ingrese un nombre de usuario' name="username" />
                <div className="invalid-feedback">
                    Please provide a valid zip.
                </div>
            </div>
            <div className="col-md-6">
                <label htmlFor="password" className="form-label">Contraseña</label>
                <input type="password" className="form-control" id="password" placeholder='Ingrese una contraseña' name="password" />
                <div className="invalid-feedback">
                    Please provide a valid city.
                </div>
            </div>
            <div className="col-md-6">
                <label htmlFor="confirm_password" className="form-label">Confirmar contraseña</label>
                <input type="password" className="form-control" id="confirm_password" placeholder='Confirma la contraseña' name="confirm_password" />
                <div className="invalid-feedback">
                    Please provide a valid zip.
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