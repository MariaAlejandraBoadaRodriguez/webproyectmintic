import styles from './productsformPage.module.css';
import usuarios from './icon/usuarios.png';
import eliminar from './icon/eliminar.png';
import actualizar from './icon/actualizar.png';
import {Link} from 'react-router-dom';
import React, { useEffect, useState} from 'react';
import axios from 'axios';


const ProductsformPage = (props) => {

   const [id_productos, setid_productos] = useState('');
   const [descripcion, setdescripcion] = useState('');
   const [valorUnitario, setvalorUnitario] = useState('');
   const [cantidad, setcantidad] = useState('');
   const [estado, setestado] = useState('');


   const EnviarDatosBackend = (e) =>{
        e.preventDefault();
       console.log('El valor de la variable es', id_productos, descripcion, valorUnitario, cantidad, estado);    
       const options = {
        url: 'http://localhost:5000/productos/nuevos',
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        data: {
            descripcion: descripcion,
            valor_unitario: valorUnitario,
            cantidad: cantidad,
            estado: estado,
          }
       
      };
      
      axios.request(options).then(function (response) {
        console.log(response.data);
        console.log('info enviada')
      }).catch(function (error) {
        console.error(error);
      });
   };

   useEffect(() => { 
    
    //console,log('Esta es una funcion que se aplica cada que cambia id_productos');

    }, [id_productos, descripcion, valorUnitario, cantidad, estado]);

    const submitform = (e)=>{
            console.log('Datos del form enviados'); 
    };

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
                <h3 id='addproducto'>INGRESAR PRODUCTO</h3>
                <div  className={styles.formulario}>
                    <form onSubmit={submitform}>
                        <tr>
                           <tr>
                                <p>ID PRODUCTO</p>
                                <p><input onChange={(e)=>{setid_productos(e.target.value)}} type="text" name="id_productos"></input></p>
                                <p>DESCRIPCIÓN</p>
                                <p><input onChange={(e)=>{setdescripcion(e.target.value)}} type="text" name="descripcion"></input></p>
                                <p>VALOR UNITARIO</p>
                                <p><input onChange={(e)=>{setvalorUnitario(e.target.value)}} type="text" name="valor_unitario"></input></p>
                                <p>CANTIDAD</p>
                                <p><input onChange={(e)=>{setcantidad(e.target.value)}} type="number" name="cantidad"></input></p>
                                <p>ESTADO</p>
                                <select name="estado">
                                    <option onChange={(e)=>{setestado(e.target.value)}} value="1">Seleccione el Estado</option>
                                    <option onChange={(e)=>{setestado(e.target.value)}} value="1">Disponible</option>
                                    <option onChange={(e)=>{setestado(e.target.value)}} value="2">Agotado</option>
                                </select>
                            </tr>
                        </tr>
                        <tr>
                            <td colspan="2">
                                <button type='submit' onClick={EnviarDatosBackend} className={styles.boton}>Agregar</button>
                            </td>
                        </tr>
                    </form>
                   
                </div>
            </div>
        </div>
    )
};
    
export default ProductsformPage