import React from 'react';
import { Link, NavLink } from "react-router-dom";
import * as routes from '../../../routers/routes';

export default function Sidebar() {
  
  return (
    <aside className="suite__sidebar">
      <div className="suite__sidebar-navbar">
        <div className="logo mt-4">
          <img src="https://webkend.co/wp-content/uploads/2021/01/logo-webkend.svg" alt="Logo Vecindario" className="logo-vecindario" />
          <div className='divider-sidebar'></div>
        </div>

        <strong className='text-center'>✌️¡Hola Alejandra! 🤩</strong>
        <div className="sidebar-menu">
          <NavLink to={routes.dashboardRoute}>
            <li className='menu-item'>
                <div className='content-icon'>
                  <i className="fa-solid fa-chart-line"></i>
                </div>
                Dashboard
            </li>
          </NavLink>
          <NavLink to={routes.headquartersRoute}>
            <li className='menu-item'>
                <div className='content-icon'>
                  <i className="fa-solid fa-building-flag"></i>
                </div>
                Nuestras sedes
            </li>
          </NavLink>
          <NavLink to={routes.teamRoute}>
            <li className="menu-item">
              <div className='content-icon'>
                <i className="fa-solid fa-people-group"></i>
              </div>
              Mi equipo
            </li>
          </NavLink>
          <NavLink to={routes.inventoryRoute}>
            <li className='menu-item'>
              <div className='content-icon'>
                <i className="fa-solid fa-store"></i>
              </div>
              Inventario
            </li>
          </NavLink>
          <NavLink to={routes.thirdsRoute}>
            <li className='menu-item'>
              <div className='content-icon'>
                <i className="fa-solid fa-truck-fast"></i>
              </div>
              Terceros
            </li>
          </NavLink>
        </div>

        <div className="logout">
          <li>
            <Link to="/logout">
              {/* <i className="fas fa-sign-out-alt"></i> */}
              <i className="fa-solid fa-power-off"></i>
              Cerrar sesión
            </Link>
          </li>
        </div>
      </div>
    </aside>
  )
}
