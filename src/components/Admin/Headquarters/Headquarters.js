import React from 'react'
import Moment from 'moment';
import { Link } from 'react-router-dom';
import { createHeadquartersRoute } from '../../../routers/routes';
import { getHeadquarters } from './Services/ServicesHeadquarters';
import ComponentWithFetchingData from '../../Utils/ComponentWithFetchingData';

const MainTable = ({data}) => {
  return(
    <div className='admin-table' style={{position: 'relative'}}>
      {data && 
        <table role="table" className='table'>
          <thead>
            <tr role="row" className="table-row-head">
              <th className="first-head-item">Nombre</th>
              <th className="head-item">Ubicación</th>
              <th className="head-item">Contacto</th>
              <th className="head-item">Fecha de creación</th>
              <th className="last-head-item"></th>
            </tr>
          </thead>
          <tbody>

            {data.map((headquarter, index) => (
              <tr key={`headquarter-${headquarter.id}`} role="row" className="table-row-body">
                <td role="gridcell" className="first-body-item">
                  <div className="info-column">
                    <span className="table-avatar">
                      <img src="https://media.istockphoto.com/vectors/portrait-of-an-androgynous-young-girl-vector-id1264140678?k=20&m=1264140678&s=612x612&w=0&h=B244GvbvyrLWIA5y2KYfe4h6-CO3bimKuEP9vamd6M8=" className="avatar-img" />
                    </span>
                    <div className="info">
                      <p className="text-sup">{headquarter.name}</p>
                      <p className="text-inf">Local: {headquarter.local}</p>
                    </div>
                  </div>
                </td>
                <td role="gridcell" className="body-item">
                  <div className="info-icon">
                    <i className="fa-solid fa-location-dot"></i>
                    <p className="text-sup">{headquarter.address}</p>
                    {/* <p className="text-inf">{user.headquarter['name']}</p> */}
                  </div>
                </td>
                <td role="gridcell" className="body-item">
                  <div className='info-icon'>
                    <i className="fa-solid fa-square-phone"></i>
                    <p><a href={`tel: 57${headquarter.phone}`}>{headquarter.phone}</a></p>
                  </div>
                </td>
                <td role="gridcell" className="body-item">
                  <div className='info-icon'>
                    <i className="fa-solid fa-calendar-days"></i>
                    <p>{Moment(headquarter.createdAt).format('DD/MM/YYYY')}</p>
                  </div>
                </td>
                <td role="gridcell" className="body-item">
                  <button type="button" className="more-button">
                    <i className="fa-solid fa-ellipsis-vertical"></i>
                  </button>
                </td>
              </tr>
            ))}

          </tbody>
        </table>
      }
    </div>
  )
}

const Headquarters = () => {
  return (
    <section className='admin__table admin__headquarters'>
        <div className='heading'>
            <h2>Sedes</h2>
            <div className='functions'>
              <input placeholder="Buscar" />
              <Link to={createHeadquartersRoute}>
                <button>Nuevo</button>
              </Link>
            </div>
        </div>
        <ComponentWithFetchingData request={getHeadquarters()} render={(data) => <MainTable data={data} />} />
    </section>
  )
}

export default Headquarters;
