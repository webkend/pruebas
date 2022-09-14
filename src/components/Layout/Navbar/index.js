import React from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../../../routers/routes';

const Navbar = ({ titlePage, slug }) => {
    return (
        <div className='admin__navbar'>
            <div className='content-navbar'>
                <div className="content-breadcrumb">
                    <nav className="nav-breadcrumb">
                        <ol className="list-breadcrumb">
                            <li className="breadcrumb-item">
                                <Link to={`${routes.dashboardRoute}`}>Dashboard</Link>
                                {/* <span role="presentation" className="css-t4q1nq">/</span> */}
                            </li>
                            <li className="breadcrumb-item">
                                <Link to={`/${slug}`}>{titlePage}</Link>
                                {/* <a href={slug}>{titlePage}</a> */}
                            </li>
                        </ol>
                    </nav>
                    <a className="current-page-link">{titlePage}</a>
                </div>
                <div className="content-avatar" bis_skin_checked="1">
                    <div className="d-flex align-items-center dropdownProfileMenu cursor-pointer" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <img src='https://media.istockphoto.com/vectors/portrait-of-an-androgynous-young-girl-vector-id1264140678?k=20&m=1264140678&s=612x612&w=0&h=B244GvbvyrLWIA5y2KYfe4h6-CO3bimKuEP9vamd6M8=' alt="avatar" className="profile-img mr-2" />
                        <span>felipealzate</span>
                    </div>
                    {/* <ul>
                        <li>Mi perfil</li>
                    </ul> */}
                </div>
            </div>
        </div>
  )
}

export default Navbar;
