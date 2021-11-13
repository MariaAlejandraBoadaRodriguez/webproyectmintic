import React from "react";
import styles from './SalesupgradePage.module.css';
import usuarios from './icon/usuarios.png';
import eliminar from './icon/eliminar.png';
import actualizar from './icon/actualizar.png';
import {Link} from 'react-router-dom'

const salesupgradePage = props => {
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
                <h3>ACTUALIZAR VENTA</h3>
                <div  className={styles.formulario}>
                    <table>
                        <tr>
                            <td>
                                <form>
                                    <p>ID VENTA</p>
                                    <p><input type="text" name="idventa"></input></p>
                                    <p>VALOR TOTAL</p>
                                    <p><input type="text" name="valortotal"></input></p>
                                    <p>ID PRODUCTO</p>
                                    <p><input type="text" name="idproducto"></input></p>
                                    <p>CANTIDAD</p>
                                    <p><input type="number" name="cantidad"></input></p>
                                    <p>PRECIO UNITARIO</p>
                                    <p><input type="text" name="preciounitario"></input></p>
                                </form>
                            </td>
                            <td>
                                <form>
                                    <p>FECHA VENTA</p>
                                    <p><input type="text" name="nombre"></input></p>
                                    <p>ID CLIENTE</p>
                                    <p><input type="text" name="nombre"></input></p>
                                    <p>CLIENTE</p>
                                    <p><input type="text" name="nombre"></input></p>
                                    <p>ID VENDEDOR</p>
                                    <p><input type="text" name="nombre"></input></p>
                                    <p>VENDEDOR</p>
                                    <p><input type="text" name="nombre"></input></p>
                                </form>
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
    
export default salesupgradePage