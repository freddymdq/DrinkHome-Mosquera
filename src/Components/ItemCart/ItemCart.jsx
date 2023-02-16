/* import { Link } from "react-router-dom"; */
import React, {useContext} from "react";


const ItemCart = ({ product }) => {
    
    const { removeProduct} = useContext();    

    return(
        <>
            <img src={product.foto} alt={product.title}/>
            <div>
                <p>Titulo: {product.title}</p>
                <p>Cantidad: {product.quantity}</p>
                <p>Precio: {product.price}</p>
                <p>Subtotal: {product.quantity * product.price}</p>
                <button className="btn btn-outline text-warning" onClick={()=>removeProduct(product.id)}>Eliminar</button>
            </div>

        </>
    )
}

export default ItemCart