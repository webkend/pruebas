import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';
// import './styles.scss';

const AppLayout = ({ body, children, titlePage, slug}) => {
    return (
        <div className="suite__main container-flex">
            <div className='divider-background'></div>

            <Sidebar />

            <div className="main-container container-flex">
                <Navbar titlePage={titlePage} slug={slug} />
                <div className="ctn-body">{body || children}</div>
                <Footer />
            </div>

        </div>
    );
}

export default AppLayout;
