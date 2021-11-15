import React from "react";
import styles from './productsPage.module.css';
import usuarios from './icon/usuarios.png';
import eliminar from './icon/eliminar.png';
import actualizar from './icon/actualizar.png';
import {Link} from 'react-router-dom';

window.onload = function(){
    if(document.getElementById('titulo').innerHTML!=undefined){
     if(document.getElementById('titulo').innerHTML=='PRODUCTOS'){
        fetch("http://localhost:5000/productos")
        .then(function(respuesta){
            return respuesta.json();
        })
        .then(function(respuesta){
            console.log(respuesta)
    
        var listarinfo = document.getElementById('infoproductos')
        let i = 0
        for (let valor of respuesta){ 
            listarinfo.innerHTML+=`
            <tr>
                <td>${respuesta[i].id_productos}</td>
                <td>${respuesta[i].descripcion}</td>
                <td>${respuesta[i].valor_unitario}</td>
                <td>${respuesta[i].cantidad}</td>
                <td>${respuesta[i].estado}</td>
            </tr>`;
            i++;
        }
        }) 
    }else if(document.getElementById('titulo').innerHTML=='USUARIOS'){
        fetch("http://localhost:5000/usuarios")
        .then(function(respuesta){
            return respuesta.json();
        })
        .then(function(respuesta){
            let i = 0
            for(let valor of respuesta){ 
                document.getElementById('infousuarios').innerHTML+=`
                <tr>
                    <td>${respuesta[i].id_usuarios}</td>
                    <td>${respuesta[i].estado}</td>
                    <td>${respuesta[i].rol}</td>
                    <td>${respuesta[i].nombre}</td>
                    <td>${respuesta[i].identificacion}</td>
                    <td>${respuesta[i].direccion}</td>
                    <td>${respuesta[i].telefono}</td>
                </tr>`;
                i++;
            }      
        })
    }else if(document.getElementById('titulo').innerHTML=='VENTAS'){
        fetch("http://localhost:5000/sales")
        .then(function(respuesta)
        {
            return respuesta.json();
        })
        .then(function(respuesta){
            let i = 0
            for(let valor of respuesta){ 
                document.getElementById('infoventas').innerHTML+=`
                <tr>
                    <td>${respuesta[i].id_ventas}</td>
                    <td>${respuesta[i].valor_total}</td>
                    <td>${respuesta[i].id_producto}</td>
                    <td>${respuesta[i].cantidad}</td>
                    <td>${respuesta[i].precio_unitario}</td>
                    <td>${respuesta[i].fecha_venta}</td>
                    <td>${respuesta[i].id_cliente}</td>
                    <td>${respuesta[i].cliente}</td>
                    <td>${respuesta[i].vendedor}</td>
                </tr>`;
                i++;
            }      
        })
    }
}
}



const productsPage = props => {
    
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
                <h3 id='titulo'>PRODUCTOS</h3>
                <table className={styles['table-container']}>
                    <thead>
                        <tr>
                            <th>ID PRODUCTOS</th>
                            <th>DESCRIPCIÓN DEL PRODUCTO</th>
                            <th>VALOR UNITARIO</th>
                            <th>CANTIDAD</th>
                            <th>ESTADO</th>
                        </tr>
                    </thead>
                    <tbody id='infoproductos'></tbody>
                </table>
            </div>
        </div>
    )
}
    
export default productsPage