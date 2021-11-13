import React from "react";
import styles from './modulePage.module.css';
import usuarios from './icon/usuarios.png';
import ventas from './icon/ventas.png';
import productos from './icon/productos.png';
import {Link} from 'react-router-dom'

const modulePage = props => {
    return (
        <div className={styles.container}>
            <div className={styles.modules}>
                <img className={styles.usuarios}
                src={usuarios}
                alt={''}
                />
            <Link to='/module/users'>Usuarios</Link>
            </div>
            <div className={styles.modules}>
                <img className={styles.ventas}
                src={ventas}
                alt={''}
                />
            <Link to='/module/sales'>Ventas</Link>
            </div>
            <div className={styles.modules}>
                <img className={styles.productos}
                src={productos}
                alt={''}
                />
            <Link to='/module/products'>Productos</Link>
            </div>
        </div>
    )
  }
  
  export default modulePage