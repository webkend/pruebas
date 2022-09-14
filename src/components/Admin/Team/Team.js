import React from 'react'
import { Link } from 'react-router-dom';
import { createTeamRoute } from '../../../routers/routes';
import { getTeam } from './Services/ServicesTeam';
import ComponentWithFetchingData from '../../Utils/ComponentWithFetchingData';

const MainTable = ({data}) => {
  return(
    <div className='admin-table'>
      <table role="table" className='table'>
        <thead>
          <tr role="row" className="table-row-head">
            <th className="first-head-item">Nombre</th>
            <th className="head-item">Cargo</th>
            <th className="head-item">Contacto</th>
            <th className="head-item">Employed</th>
            <th className="last-head-item"></th>
          </tr>
        </thead>
        <tbody>

          {data.map((user, index) => (
            <tr key={`user-${user.id}`} role="row" className="table-row-body">
              <td role="gridcell" className="first-body-item">
                <div className="info-column">
                  <span className="table-avatar">
                    <img src="https://media.istockphoto.com/vectors/portrait-of-an-androgynous-young-girl-vector-id1264140678?k=20&m=1264140678&s=612x612&w=0&h=B244GvbvyrLWIA5y2KYfe4h6-CO3bimKuEP9vamd6M8=" className="avatar-img" />
                  </span>
                  <div className="info">
                    <p className="text-sup">{user.firstName} {user.firstLastName}</p>
                    <p className="text-inf"><a href={`mailto: ${user.email}`}>{user.email}</a></p>
                  </div>
                </div>
              </td>
              <td role="gridcell" className="body-item">
                <div className="info">
                  <p className="text-sup">{user.role['description']}</p>
                  <p className="text-inf">{user.headquarter['name']}</p>
                </div>
              </td>
              <td role="gridcell" className="body-item">
                <div className='info-icon'>
                  <i className="fa-brands fa-whatsapp"></i>
                  <p><a href={`tel: 57${user.cellphone}`}>{user.cellphone}</a></p>
                </div>
              </td>
              <td role="gridcell" className="body-item">
                <p className="chakra-text css-f9bmct">14/06/21</p>
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

const Team = () => {
  return (
    <section className='admin__table admin__team'>
      <div className='heading'>
        <h2>Colaboradores</h2>
        <div className='functions'>
          <input placeholder="Buscar" />
          <Link to={createTeamRoute}>
            <button>Nuevo</button>
          </Link>
        </div>
      </div>
      <ComponentWithFetchingData request={getTeam()} render={(data) => <MainTable data={data} />} />

      {/* <form action="/api/users/create-user" method="post" _lpchecked="1">
        <div class="row" bis_skin_checked="1">
            <div class="form-group col-md-6" bis_skin_checked="1">
                <select id="roleId" class="form-control" name="roleId">
                    <option value="">Seleccione un Tipo de Usuario</option>
                        <option value="1">Administrador</option>
                        <option value="2">Asesor</option>
                </select>
            </div>
            <div class="form-group col-md-6" bis_skin_checked="1">
                <select id="headquartersId" class="form-control" name="headquartersId">
                    <option value="0">Seleccione una Sede</option>
                        <option value="1">Pasaje Comercial La Bolsa - 133</option>
                        <option value="2">Pasaje Comercial La Bolsa - Burbuja 1</option>
                </select>
            </div>
        </div>                 
        <div class="row" bis_skin_checked="1">
            <div class="form-group col-md-6" bis_skin_checked="1">
                <input type="text" class="form-control" id="firstName" name="firstName" placeholder="Primer Nombre" value="" style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAfBJREFUWAntVk1OwkAUZkoDKza4Utm61iP0AqyIDXahN2BjwiHYGU+gizap4QDuegWN7lyCbMSlCQjU7yO0TOlAi6GwgJc0fT/fzPfmzet0crmD7HsFBAvQbrcrw+Gw5fu+AfOYvgylJ4TwCoVCs1ardYTruqfj8fgV5OUMSVVT93VdP9dAzpVvm5wJHZFbg2LQ2pEYOlZ/oiDvwNcsFoseY4PBwMCrhaeCJyKWZU37KOJcYdi27QdhcuuBIb073BvTNL8ln4NeeR6NRi/wxZKQcGurQs5oNhqLshzVTMBewW/LMU3TTNlO0ieTiStjYhUIyi6DAp0xbEdgTt+LE0aCKQw24U4llsCs4ZRJrYopB6RwqnpA1YQ5NGFZ1YQ41Z5S8IQQdP5laEBRJcD4Vj5DEsW2gE6s6g3d/YP/g+BDnT7GNi2qCjTwGd6riBzHaaCEd3Js01vwCPIbmWBRx1nwAN/1ov+/drgFWIlfKpVukyYihtgkXNp4mABK+1GtVr+SBhJDbBIubVw+Cd/TDgKO2DPiN3YUo6y/nDCNEIsqTKH1en2tcwA9FKEItyDi3aIh8Gl1sRrVnSDzNFDJT1bAy5xpOYGn5fP5JuL95ZjMIn1ya7j5dPGfv0A5eAnpZUY3n5jXcoec5J67D9q+VuAPM47D3XaSeL4AAAAASUVORK5CYII=&quot;); background-repeat: no-repeat; background-attachment: scroll; background-size: 16px 18px; background-position: 98% 50%; cursor: auto;">
            </div>
            <div class="form-group col-md-6" bis_skin_checked="1">
                <input type="text" class="form-control" id="secondName" name="secondName" placeholder="Segundo Nombre" value="">
            </div>
        </div>
        <div class="row" bis_skin_checked="1">
            <div class="form-group col-md-6" bis_skin_checked="1">
                <input type="text" class="form-control" id="firstLastName" name="firstLastName" placeholder="Primer Apellido" value="">
            </div>
            <div class="form-group col-md-6" bis_skin_checked="1">
                <input type="text" class="form-control" id="secondLastName" name="secondLastName" placeholder="Segundo Apellido" value="">
            </div>
        </div>
        <div class="row" bis_skin_checked="1">
            <div class="form-group col-md-6" bis_skin_checked="1">
                <input type="email" class="form-control" id="email" name="email" placeholder="Correo Electrónico" value="">
            </div>
            <div class="form-group col-md-6" bis_skin_checked="1">
                <input type="text" class="form-control" id="address" name="address" placeholder="Dirección" value="">
            </div>
        </div>
        <div class="row" bis_skin_checked="1">
            <div class="form-group col-md-6" bis_skin_checked="1">
                <input type="text" class="form-control" id="cellphone" name="cellphone" placeholder="Número de Celular" value="">
            </div>
            <div class="form-group col-md-6" bis_skin_checked="1">
                <input type="text" class="form-control" id="username" name="username" placeholder="Nombre de Usuario" value="">
            </div>
        </div>
        <div class="row" bis_skin_checked="1">
            <div class="form-group col-md-6" bis_skin_checked="1">
                <input type="password" class="form-control" id="password" name="password" placeholder="Contraseña" value="" style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAABKRJREFUWAnNl0tsVGUUxzvTTlslZUaCloZHY6BRFkp9sDBuqgINpaBp02dIDImwKDG6ICQ8jBYlhg0rxUBYEALTpulMgBlqOqHRDSikJkZdGG0CRqAGUuwDovQ1/s7NPTffnTu3zMxGvuT2vP7n8Z3vu+dOi4r+5xUoJH8sFquamZmpTqfTVeIfCARGQ6HQH83NzaP5xsu5gL6+vuVzc3NdJN1Kkhd8Ev1MMYni4uJjra2tt3wwLvUjCxgYGFg8Pj7+MV5dPOUub3/hX0zHIpFId0NDw6Q/jO4tZOzv76+Znp6+AOb5TBw7/YduWC2Hr4J/IhOD/GswGHy7vb39tyw2S+VbAC1/ZXZ29hKoiOE8RrIvaPE5WvyjoS8CX8sRvYPufYpZYtjGS0pKNoD/wdA5bNYCCLaMYMMEWq5IEn8ZDof3P6ql9pF9jp8cma6bFLGeIv5ShdISZUzKzqPIVnISp3l20caTJsaPtwvc3dPTIx06ziZkkyvY0FnoW5l+ng7guAWnpAI5w4MkP6yy0GQy+dTU1JToGm19sqKi4kBjY+PftmwRYn1ErEOq4+i2tLW1DagsNGgKNv+p6tj595nJxUbyOIF38AwipoSfnJyMqZ9SfD8jxlWV5+fnu5VX6iqgt7d3NcFeUiN0n8FbLEOoGkwdgY90dnbu7OjoeE94jG9wd1aZePRp5AOqw+9VMM+qLNRVABXKkLEWzn8S/FtbdAhnuVQE7LdVafBPq04pMYawO0OJ+6XHZkFcBQA0J1xKgyhlB0EChEWGX8RulsgjvOjEBu+5V+icWOSoFawuVwEordluG28oSCmXSs55SGSCHiXhmDzC25ghMHGbdwhJr6sAdpnyQl0FYIyoEX5CeYOuNHg/NhvGiUUxVgfV2VUAxjtqgPecp9oKoE4sNnbX9HcVgMH8nD5nAoWnKM/5ZmKyySRdq3pCmDncR4DxOwVC64eHh0OGLOcur1Vey46xUZ3IcVl5oa4OlJaWXgQwJwZyhUdGRjqE14VtSnk/mokhxnawiwUvsZmsX5u+rgKamprGMDoA5sKhRCLxpDowSpsJ8vpCj2AUPzg4uIiNfKIyNMkH6Z4hF3k+RgTYz6vVAEiKq2bsniZIC0nTtvMVMwBzoBT9tKkTHp8Ak1V8dTrOE+NgJs7VATESTH5WnVAgfHUqlXK6oHpJEI1G9zEZH/Du16leqHyS0UXBNKmeOMf5NvyislJPB8RAFz4g8IuwofLy8k319fUP1EEouw7L7mC3kUTO1nn3sb02MTFxFpsz87FfJuaH4pu5fF+reDz+DEfxkI44Q0ScSbyOpDGe1RqMBN08o+ha0L0JdeKi/6msrGwj98uZMeon1AGaSj+elr9LwK9IkO33n8cN7Hl2vp1N3PcYbUXOBbDz9bwV1/wCmXoS3+B128OPD/l2LLg8l9APXVlZKZfzfDY7ehlQv0PPQDez6zW5JJdYOXdAwHK2dGIv7GH4YtHJIvEOvvunLCHPPzl3QOLKTkl0hPbKaDUvlTU988xtwfMqQBPQ3m/4mf0yBVlDCSr/CRW0CipAMnGzb9XU1NSRvIX7kSgo++Pg9B8wltxxbHKPZgAAAABJRU5ErkJggg==&quot;); background-repeat: no-repeat; background-attachment: scroll; background-size: 16px 18px; background-position: 98% 50%; cursor: auto;">
            </div>
            <div class="form-group col-md-6" bis_skin_checked="1">
                <input type="password" class="form-control" id="confirm_password" name="confirm_password" placeholder="Confirmar Contraseña" value="" style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAABKRJREFUWAnNl0tsVGUUxzvTTlslZUaCloZHY6BRFkp9sDBuqgINpaBp02dIDImwKDG6ICQ8jBYlhg0rxUBYEALTpulMgBlqOqHRDSikJkZdGG0CRqAGUuwDovQ1/s7NPTffnTu3zMxGvuT2vP7n8Z3vu+dOi4r+5xUoJH8sFquamZmpTqfTVeIfCARGQ6HQH83NzaP5xsu5gL6+vuVzc3NdJN1Kkhd8Ev1MMYni4uJjra2tt3wwLvUjCxgYGFg8Pj7+MV5dPOUub3/hX0zHIpFId0NDw6Q/jO4tZOzv76+Znp6+AOb5TBw7/YduWC2Hr4J/IhOD/GswGHy7vb39tyw2S+VbAC1/ZXZ29hKoiOE8RrIvaPE5WvyjoS8CX8sRvYPufYpZYtjGS0pKNoD/wdA5bNYCCLaMYMMEWq5IEn8ZDof3P6ql9pF9jp8cma6bFLGeIv5ShdISZUzKzqPIVnISp3l20caTJsaPtwvc3dPTIx06ziZkkyvY0FnoW5l+ng7guAWnpAI5w4MkP6yy0GQy+dTU1JToGm19sqKi4kBjY+PftmwRYn1ErEOq4+i2tLW1DagsNGgKNv+p6tj595nJxUbyOIF38AwipoSfnJyMqZ9SfD8jxlWV5+fnu5VX6iqgt7d3NcFeUiN0n8FbLEOoGkwdgY90dnbu7OjoeE94jG9wd1aZePRp5AOqw+9VMM+qLNRVABXKkLEWzn8S/FtbdAhnuVQE7LdVafBPq04pMYawO0OJ+6XHZkFcBQA0J1xKgyhlB0EChEWGX8RulsgjvOjEBu+5V+icWOSoFawuVwEordluG28oSCmXSs55SGSCHiXhmDzC25ghMHGbdwhJr6sAdpnyQl0FYIyoEX5CeYOuNHg/NhvGiUUxVgfV2VUAxjtqgPecp9oKoE4sNnbX9HcVgMH8nD5nAoWnKM/5ZmKyySRdq3pCmDncR4DxOwVC64eHh0OGLOcur1Vey46xUZ3IcVl5oa4OlJaWXgQwJwZyhUdGRjqE14VtSnk/mokhxnawiwUvsZmsX5u+rgKamprGMDoA5sKhRCLxpDowSpsJ8vpCj2AUPzg4uIiNfKIyNMkH6Z4hF3k+RgTYz6vVAEiKq2bsniZIC0nTtvMVMwBzoBT9tKkTHp8Ak1V8dTrOE+NgJs7VATESTH5WnVAgfHUqlXK6oHpJEI1G9zEZH/Du16leqHyS0UXBNKmeOMf5NvyislJPB8RAFz4g8IuwofLy8k319fUP1EEouw7L7mC3kUTO1nn3sb02MTFxFpsz87FfJuaH4pu5fF+reDz+DEfxkI44Q0ScSbyOpDGe1RqMBN08o+ha0L0JdeKi/6msrGwj98uZMeon1AGaSj+elr9LwK9IkO33n8cN7Hl2vp1N3PcYbUXOBbDz9bwV1/wCmXoS3+B128OPD/l2LLg8l9APXVlZKZfzfDY7ehlQv0PPQDez6zW5JJdYOXdAwHK2dGIv7GH4YtHJIvEOvvunLCHPPzl3QOLKTkl0hPbKaDUvlTU988xtwfMqQBPQ3m/4mf0yBVlDCSr/CRW0CipAMnGzb9XU1NSRvIX7kSgo++Pg9B8wltxxbHKPZgAAAABJRU5ErkJggg==&quot;); background-repeat: no-repeat; background-attachment: scroll; background-size: 16px 18px; background-position: 98% 50%;">
            </div>
        </div> 
        <div class="form-group d-grid gap-2 mx-auto" bis_skin_checked="1">
            <button class="btn btn-primary" type="button" onclick="save()">
                Registrarse
            </button>
        </div>
      </form> */}
      {/* <div className='admin-table'>
        <table role="table" className='table'>
          <thead>
            <tr role="row" className="table-row-head">
              <th className="first-head-item">Nombre</th>
              <th className="head-item">Cargo</th>
              <th className="head-item">Estado</th>
              <th className="head-item">Employed</th>
              <th className="last-head-item"></th>
            </tr>
          </thead>
          <tbody>
            <tr role="row" className="table-row-body">
              <td role="gridcell" className="first-body-item">
                <div className="info-column">
                  <span className="table-avatar">
                    <img src="https://media.istockphoto.com/vectors/portrait-of-an-androgynous-young-girl-vector-id1264140678?k=20&m=1264140678&s=612x612&w=0&h=B244GvbvyrLWIA5y2KYfe4h6-CO3bimKuEP9vamd6M8=" className="avatar-img" />
                  </span>
                  <div className="info">
                    <p className="text-sup">Esthera Jackson</p>
                    <p className="text-inf">alexa@simmmple.com</p>
                  </div>
                </div>
              </td>
              <td role="gridcell" className="body-item">
                <div className="info">
                  <p className="text-sup">Organization</p>
                  <p className="text-inf">Manager</p>
                </div>
              </td>
              <td role="gridcell" className="body-item">
                <span className="chakra-badge css-1glalte">Online</span>
              </td>
              <td role="gridcell" className="body-item">
                <p className="chakra-text css-f9bmct">14/06/21</p>
              </td>
              <td role="gridcell" className="body-item">
                <button type="button" className="more-button">
                  <i className="fa-solid fa-ellipsis-vertical"></i>
                </button>
              </td>
            </tr>

            <tr role="row" className="table-row-body">
              <td role="gridcell" className="first-body-item">
                <div className="info-column">
                  <span className="table-avatar">
                    <img src="https://demos.creative-tim.com//argon-dashboard-chakra/static/media/avatar1.eeef2af6.png" className="avatar-img" />
                  </span>
                  <div className="info">
                    <p className="text-sup">Alexa Liras</p>
                    <p className="text-inf">laurent@simmmple.com</p>
                  </div>
                </div>
              </td>
              <td role="gridcell" className="body-item">
                <div className="info">
                  <p className="text-sup">Developer</p>
                  <p className="text-inf">Programmer</p>
                </div>
              </td>
              <td role="gridcell" className="body-item">
                <span className="chakra-badge css-1glalte">Offline</span>
              </td>
              <td role="gridcell" className="body-item">
                <p className="chakra-text css-f9bmct">12/05/21</p>
              </td>
              <td role="gridcell" className="body-item">
                <button type="button" className="more-button">
                  <i className="fa-solid fa-ellipsis-vertical"></i>
                </button>
              </td>
            </tr>

            <tr role="row" className="table-row-body">
              <td role="gridcell" className="first-body-item">
                <div className="info-column">
                  <span className="table-avatar">
                    <img src="https://demos.creative-tim.com//argon-dashboard-chakra/static/media/avatar1.eeef2af6.png" className="avatar-img" />
                  </span>
                  <div className="info">
                    <p className="text-sup">Laurent Michael</p>
                    <p className="text-inf">laurent@simmmple.com</p>
                  </div>
                </div>
              </td>
              <td role="gridcell" className="body-item">
                <div className="info">
                  <p className="text-sup">Projects</p>
                  <p className="text-inf">Executive</p>
                </div>
              </td>
              <td role="gridcell" className="body-item">
                <span className="chakra-badge css-1glalte">Online</span>
              </td>
              <td role="gridcell" className="body-item">
                <p className="chakra-text css-f9bmct">07/06/21</p>
              </td>
              <td role="gridcell" className="body-item">
                <button type="button" className="more-button">
                  <i className="fa-solid fa-ellipsis-vertical"></i>
                </button>
              </td>
            </tr>

            <tr role="row" className="table-row-body">
              <td role="gridcell" className="first-body-item">
                <div className="info-column">
                  <span className="table-avatar">
                    <img src="https://demos.creative-tim.com//argon-dashboard-chakra/static/media/avatar1.eeef2af6.png" className="avatar-img" />
                  </span>
                  <div className="info">
                    <p className="text-sup">Freduardo Hill</p>
                    <p className="text-inf">freduardo@simmmple.com</p>
                  </div>
                </div>
              </td>
              <td role="gridcell" className="body-item">
                <div className="info">
                  <p className="text-sup">Organization</p>
                  <p className="text-inf">Manager</p>
                </div>
              </td>
              <td role="gridcell" className="body-item">
                <span className="chakra-badge css-1glalte">Online</span>
              </td>
              <td role="gridcell" className="body-item">
                <p className="chakra-text css-f9bmct">14/11/21</p>
              </td>
              <td role="gridcell" className="body-item">
                <button type="button" className="more-button">
                  <i className="fa-solid fa-ellipsis-vertical"></i>
                </button>
              </td>
            </tr>

            <tr role="row" className="table-row-body">
              <td role="gridcell" className="first-body-item">
                <div className="info-column">
                  <span className="table-avatar">
                    <img src="https://demos.creative-tim.com//argon-dashboard-chakra/static/media/avatar1.eeef2af6.png" className="avatar-img" />
                  </span>
                  <div className="info">
                    <p className="text-sup">Daniel Thomas</p>
                    <p className="text-inf">daniel@simmmple.com</p>
                  </div>
                </div>
              </td>
              <td role="gridcell" className="body-item">
                <div className="info">
                  <p className="text-sup">Developer</p>
                  <p className="text-inf">Programmer</p>
                </div>
              </td>
              <td role="gridcell" className="body-item">
                <span className="chakra-badge css-1glalte">Offline</span>
              </td>
              <td role="gridcell" className="body-item">
                <p className="chakra-text css-f9bmct">21/01/21</p>
              </td>
              <td role="gridcell" className="body-item">
                <button type="button" className="more-button">
                  <i className="fa-solid fa-ellipsis-vertical"></i>
                </button>
              </td>
            </tr>

            <tr role="row" className="table-row-body">
              <td role="gridcell" className="first-body-item">
                <div className="info-column">
                  <span className="table-avatar">
                    <img src="https://demos.creative-tim.com//argon-dashboard-chakra/static/media/avatar1.eeef2af6.png" className="avatar-img" />
                  </span>
                  <div className="info">
                    <p className="text-sup">Mark Wilson</p>
                    <p className="text-inf">mark@simmmple.com</p>
                  </div>
                </div>
              </td>
              <td role="gridcell" className="body-item">
                <div className="info">
                  <p className="text-sup">UI/UX Design</p>
                  <p className="text-inf">Designer</p>
                </div>
              </td>
              <td role="gridcell" className="body-item">
                <span className="chakra-badge css-1glalte">Offline</span>
              </td>
              <td role="gridcell" className="body-item">
                <p className="chakra-text css-f9bmct">04/09/20</p>
              </td>
              <td role="gridcell" className="body-item">
                <button type="button" className="more-button">
                  <i className="fa-solid fa-ellipsis-vertical"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div> */}
    </section>
  )
}

export default Team;