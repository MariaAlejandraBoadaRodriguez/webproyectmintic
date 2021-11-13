import React from 'react';
import styles from './usersformPage.module.css';
import usuarios from './icon/usuarios.png';
import eliminar from './icon/eliminar.png';
import actualizar from './icon/actualizar.png';
import {Link} from 'react-router-dom'

const usersformPage = props => {
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
                <h3>INGRESAR USUARIO</h3>
                <div  className={styles.formulario}>
                    <table>
                        <tr>
                            <td colspan="2">
                                <p>ID USUARIO</p>
                                <p><input type="text" name="idventa"></input></p>
                           </td>
                        </tr>
                        <tr>
                           <td>
                                <form>
                                    <p>IDENTIFICACIÓN</p>
                                    <p><input type="text" name="valortotal"></input></p>
                                    <p>DIRECCIÓN</p>
                                    <p><input type="text" name="idproducto"></input></p>
                                </form>
                            </td>
                            <td>
                                <p>NOMBRE</p>
                                <p><input type="text" name="nombre"></input></p>
                                <p>TELEFONO</p>
                                <p><input type="text" name="nombre"></input></p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>ROL</p>
                                <select name="lista-rol">
                                    <option value="1">Seleccione el Rol</option>
                                    <option value="2">Administrador</option>
                                    <option value="3">Vendedor</option>
                                </select>
                            </td>
                            <td>
                                <p>ESTADO</p>
                                <select name="lista-estado">
                                    <option value="1">Seleccion el Estado</option>
                                    <option value="2">Pendiente</option>
                                    <option value="3">Autorizado</option>
                                    <option value="4">No autorizado</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2">
                                <button className={styles.boton}>Agregar</button>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}
    
export default usersformPage