import React from 'react';

const Footer = () => {
    return (
        <footer className='admin__footer'>
           <div className='copyright'>
               <p>Copyright © {new Date().getFullYear()}, <a target={'_blank'} href='https://es-la.facebook.com/ServicentOficial/'>Servicent</a>. Todos los derechos reservados.</p>
           </div>
           <div className='powered'>
               <span className='text'>Powered with <strong>❤️</strong> by: </span>
               <span className='logo-footer'>
                   {/* <p>Webkend</p>  */}
                   <a href='https://webkend.co/' target={'_blank'}>
                       <img src='https://webkend.co/wp-content/uploads/2021/01/logo-webkend.svg' />
                   </a>
                </span>
           </div>
        </footer>
  )
}

export default Footer;
