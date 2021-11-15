import React from "react";
import styles from './salesPage.module.css';
import usuarios from './icon/usuarios.png';
import eliminar from './icon/eliminar.png';
import actualizar from './icon/actualizar.png';
import {Link} from 'react-router-dom';


const salesPage = props => {
    return (
        <div className={styles.container}>
            <div className={styles['container-election']}>
                <h3>OPCIONES</h3>
                <div className={styles.modules}>
                    <img className={styles.usuarios}
                    src={usuarios}
                    alt={''}
                    />
                    <Link to='/module/sales/form'>Agregar</Link>
                </div>
                <div className={styles.modules}>
                    <img className={styles.usuarios}
                    src={actualizar}
                    alt={''}
                    />
                    <Link to='/module/sales/upgrade'>Actualizar</Link>
                </div>
                <div className={styles.modules}>
                    <img className={styles.usuarios}
                    src={eliminar}
                    alt={''}
                    />
                    <Link to='/module/sales/delete'>Eliminar</Link>
                </div>
            </div>
            <div className={styles['container-table']}>
                <h3 id='titulo'>VENTAS</h3>
                <table className={styles['table-container']}>
                    <thead>
                        <tr>
                            <th>ID VENTA</th>
                            <th>VALOR TOTAL</th>
                            <th>ID PRODUCTO</th>
                            <th>CANT</th>
                            <th>PRECIO UNITARIO</th>
                            <th>FECHA VENTA</th>
                            <th>ID CLIENTE</th>
                            <th>CLIENTE</th>
                            <th>VENDEDOR</th>
                        </tr>
                    </thead>
                    <tbody id='infoventas'></tbody>
                </table>
            </div>
        </div>
    )
}
    
export default salesPage