import React from "react";
import styles from './userspage.module.css';
import usuarios from './icon/usuarios.png';
import eliminar from './icon/eliminar.png';
import actualizar from './icon/actualizar.png';
import {Link} from 'react-router-dom';

/*window.onload = function () 
{
   
}*/

const usersPage = props => {
    return (
        <div className={styles.container}>
            <div className={styles['container-election']}>
                <h3>OPCIONES</h3>
                <div className={styles.modules}>
                    <img className={styles.usuarios}
                    src={usuarios}
                    alt={''}
                    />
                    <Link to='/module/users/form'>Agregar</Link>
                </div>
                <div className={styles.modules}>
                    <img className={styles.usuarios}
                    src={actualizar}
                    alt={''}
                    />
                    <Link to='/module/users/upgrade'>Actualizar</Link>
                </div>
                <div className={styles.modules}>
                    <img className={styles.usuarios}
                    src={eliminar}
                    alt={''}
                    />
                    <Link to='/module/users/delete'>Eliminar</Link>
                </div>
            </div>
            <div className={styles['container-table']}>
                <h3 id='titulo'>USUARIOS</h3>
                <table className={styles['table-container']}>
                    <thead>
                        <tr>
                            <th>ID USUARIO</th>
                            <th>ESTADO</th>
                            <th>ROL</th>
                            <th>NOMBRE</th>
                            <th>IDENTIFICACIÓN</th>
                            <th>DIRECCIÓN</th>
                            <th>TELEFONO</th>
                        </tr>
                    </thead>
                    <tbody id='infousuarios'></tbody>
                </table>
            </div>
        </div>
    )
}
    
export default usersPage