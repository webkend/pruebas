import React from 'react'
import { Link } from 'react-router-dom';
import { createInventoryRoute } from '../../../routers/routes';
import { getInventory } from './Services/ServicesInventory';
import ComponentWithFetchingData from '../../Utils/ComponentWithFetchingData';
import { numberFormat } from '../../../helpers/numberFormats'

const MainTable = ({data}) => {
  return(
    <div className='admin-table'>
      <table role="table" className='table'>
        <thead>
          <tr role="row" className="table-row-head">
            <th className="first-head-item">Nombre</th>
            <th className="head-item">Descripción</th>
            <th className="head-item">Precio</th>
            <th className="head-item">Estado</th>
            <th className="last-head-item"></th>
          </tr>
        </thead>
        <tbody>

          {data.map((inventory, index) => (
            <tr key={`inventory-${inventory.id}`} role="row" className="table-row-body">
              <td role="gridcell" className="first-body-item">
                <div className="info-column">
                  <div className="info">
                    <p className="text-sup">{inventory.name}</p>
                  </div>
                </div>
              </td>
              <td role="gridcell" className="body-item">
                <div className="info">
                  <p>{inventory.description}</p>
                </div>
              </td>
              <td role="gridcell" className="body-item">
                <div className='info-icon'>
                  <i class="fa-solid fa-circle-dollar-to-slot"></i>
                  <p>{numberFormat(inventory.value)}</p>
                </div>
              </td>
              <td role="gridcell" className="body-item">
                <div className="info">
                  {inventory.status === true 
                    ? 
                      <span class="table-badge activo">Activo</span> 
                    : 
                      <span class="table-badge inactivo">Inactivo</span>
                  }
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
    </div>
  )
}

const Inventory = () => {
  return (
    <section className='admin__table admin__inventory'>
        <div className='heading'>
            <h2>Inventario</h2>
            <div className='functions'>
              <input placeholder="Buscar" />
              <Link to={createInventoryRoute}>
                <button>Nuevo</button>
              </Link>
            </div>
        </div>
        <ComponentWithFetchingData request={getInventory()} render={(data) => <MainTable data={data} />} />
    </section>
  )
}

export default Inventory;
