import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../../styles/sidebar.scss'

export default function Sidebar () {
  // Creamos un estado para saber en que opcion del sidebar estamos
  const [activeLink, setActiveLink] = useState('')

  // Con este Hook obtenemos la ruta actual
  const location = useLocation()

  // Función para establecer el enlace activo
  const handleSetActiveLink = (link) => {
    setActiveLink(link)
  }

  // Actualizamos el estado del enlace activo cuando cambie la ubicación
  useState(() => {
    setActiveLink(location.pathname)
  }, [location])

  return (
    <>
      <div className='sidebar' id='sidebar'>
        <div className='containerTop'>
          <Link to='/'>
            <img className='logo d-none d-md-block' src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Coca-Cola_logo.svg/1024px-Coca-Cola_logo.svg.png' alt='THE COCA-COLA COMPANY' />
          </Link>
        </div>
        <div className='containerCenter'>
          <ul>
            <p className='title'>
              Sitema de apoyo
            </p>
            <Link
              to='/'
              className={`link-sidebar ${activeLink === '/' ? 'active' : ''}`}
              onClick={() => handleSetActiveLink('/')}
            >
              <i className='bi bi-speedometer2' />
              <span>Dashboard</span>
            </Link>
            <p className='title'>
              Talento Humano
            </p>
            <Link
              to='/resume-management'
              className={`link-sidebar ${activeLink === '/resume-management' ? 'active' : ''}`}
              onClick={() => handleSetActiveLink('/resume-management')}
            >
              <i className='bi bi-card-checklist' />
              <span>Gestión de la hoja de vida</span>
            </Link>
            <Link
              to='/new-employee'
              className={`link-sidebar ${activeLink === '/new-employee' ? 'active' : ''}`}
              onClick={() => handleSetActiveLink('/new-employee')}
            >
              <i className='bi bi-person-add' />
              <span>Agregar empleado</span>
            </Link>
            <p className='title'>
              Recursos Empresariales (ERP)
            </p>
            <Link
              to='/inventory'
              className={`link-sidebar ${activeLink === '/inventory' ? 'active' : ''}`}
              onClick={() => handleSetActiveLink('/inventory')}
            >
              <i className='bi bi-tags' />
              <span>Inventario</span>
            </Link>
            <Link
              to='/new-product'
              className={`link-sidebar ${activeLink === '/new-product' ? 'active' : ''}`}
              onClick={() => handleSetActiveLink('/new-product')}
            >
              <i className='bi bi-bag-check' />
              <span>Agregar producto</span>
            </Link>
            <Link to='/crm' className='link-sidebar'>
              <i className='bi bi-headset' />
              <span>Proveedores</span>
            </Link>
            <p className='title'>
              Opciones
            </p>
          </ul>
        </div>
        <div className='containerLogout'>
          <Link to='/login' className='link-sidebar'>
            <i className='bi bi-box-arrow-left' />
            <span>Cerrar sesion</span>
          </Link>
        </div>
      </div>
    </>
  )
}
