import React from 'react';
import styles from './ProductsupgradePage.module.css';
import usuarios from './icon/usuarios.png';
import eliminar from './icon/eliminar.png';
import actualizar from './icon/actualizar.png';
import {Link} from 'react-router-dom';

const productsupgradePage = props => {
    return (
        <div className={styles.container}>
            <div className={styles['container-election']}>
                <h3>OPCIONES</h3>
                <div className={styles.modules}>
                    <img className={styles.usuarios}
                    src={usuarios}
                    alt={''}
                    />
                    <Link to='/module/products/form'>Agregar</Link>
                </div>
                <div className={styles.modules}>
                    <img className={styles.usuarios}
                    src={actualizar}
                    alt={''}
                    />
                    <Link to='/module/products/upgrade'>Actualizar</Link>
                </div>
                <div className={styles.modules}>
                    <img className={styles.usuarios}
                    src={eliminar}
                    alt={''}
                    />
                    <Link to='/module/products/delete'>Eliminar</Link>
                </div>
            </div>
            <div className={styles['container-table']}>
                <h3>ACTUALIZAR PRODUCTO</h3>
                <div  className={styles.formulario}>
                    <table>
                        <tr>
                           <td>
                                <p>ID PRODUCTO</p>
                                <p><input type="text" name="valortotal"></input></p>
                                <p>DESCRIPCIÓN</p>
                                <p><input type="text" name="idproducto"></input></p>
                                <p>VALOR UNITARIO</p>
                                <p><input type="text" name="idproducto"></input></p>
                                <p>CANTIDAD</p>
                                <p><input type="number" name="idproducto"></input></p>
                                <p>ESTADO</p>
                                <select name="lista-rol">
                                    <option value="1">Seleccione el Estado</option>
                                    <option value="1">Disponible</option>
                                    <option value="2">Agotado</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2">
                                <button className={styles.boton}>Actualizar</button>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}
    
export default productsupgradePage