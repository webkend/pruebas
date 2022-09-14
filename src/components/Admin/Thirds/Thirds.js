import React from 'react';
import { Link } from 'react-router-dom';
import { createThirdsRoute } from '../../../routers/routes';
import { getThirds } from '../../../services/App';
import ComponentWithFetchingData from '../../Utils/ComponentWithFetchingData';

const MainTable = ({data}) => {
  return(
    <div className='admin-table'>
      <table role="table" className='table'>
        <thead>
          <tr role="row" className="table-row-head">
            <th className="first-head-item">Nombre</th>
            <th className="head-item">Contacto</th>
            <th className="head-item">Website</th>
            <th className="last-head-item"></th>
          </tr>
        </thead>
        <tbody>

          {data.map((third, index) => (
            <tr key={`third-${third.id}`} role="row" className="table-row-body">
              <td role="gridcell" className="first-body-item">
                <div className="info-column">
                  <span className="table-avatar">
                    <img src="https://media.istockphoto.com/vectors/portrait-of-an-androgynous-young-girl-vector-id1264140678?k=20&m=1264140678&s=612x612&w=0&h=B244GvbvyrLWIA5y2KYfe4h6-CO3bimKuEP9vamd6M8=" className="avatar-img" />
                  </span>
                  <div className="info">
                    <p className="text-sup">{third.name}</p>
                    <p className="text-inf"><a href={`mailto: ${third.email}`}>{third.email}</a></p>
                  </div>
                </div>
              </td>
              <td role="gridcell" className="body-item">
                <div className='info-icon'>
                  <i className="fa-solid fa-square-phone"></i>
                  <p><a href={`tel: 57${third.phone}`}>{third.phone}</a></p>
                </div>
              </td>
              <td role="gridcell" className="body-item">
                <div className="info-icon">
                  <i className="fa-solid fa-globe"></i>
                  <p><a href={`${third.website}`} target={'_blank'} >{third.website}</a></p>
                  {/* <p className="text-inf">{third.headquarter['name']}</p> */}
                </div>
              </td>
              {/* <td role="gridcell" className="body-item">
                <div className="info">
                  {third.status === true 
                    ? 
                      <span className="table-badge activo">Activo</span> 
                    : 
                      <span className="table-badge inactivo">Inactivo</span>
                  }
                </div>
              </td> */}
              <td role="gridcell" className="body-item">
                <button type="button" className="more-button">
                  <i className="fa-solid fa-ellipsis-vertical"></i>
                </button>
              </td>
            </tr>
          ))}

        </tbody>
      </table>
    </div>
  )
}

const Thirds = () => {
  return (
    <section className='admin__table admin__third'>
        <div className='heading'>
            <h2>Entidades</h2>
            <div className='functions'>
              <input placeholder="Buscar" />
              <Link to={createThirdsRoute}>
                <button>Nuevo</button>
              </Link>
            </div>
        </div>
        <ComponentWithFetchingData request={getThirds()} render={(data) => <MainTable data={data} />} />
    </section>
  )
}

export default Thirds;
