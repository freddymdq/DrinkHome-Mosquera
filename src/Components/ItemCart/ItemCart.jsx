/* import { Link } from "react-router-dom"; */
import React from "react";
import { useCartContext } from "../../Context/CartContext";



const ItemCart = ({ product }) => {
    
    const { removeProduct} = useCartContext();    

    return(
        <div className=" flex flex-row text-center items-center gap-5 m-5 rounded-[25px] p-5 bg-black">
            <img className="w-[110px] " src={product.foto} alt={product.title}/>
            <div>
                <p className="text-warning p-1 font-bold">{product.title}</p>
                <p className="text-warning p-1">Unidad: ${product.price}</p>
                <p className="text-info p-1">Subtotal: ${product.quantity * product.price}</p>
                <p className="text-warning p-1">Cantidad: {product.quantity}</p>
                <button className="btn btn-ghost text-warning" onClick={()=>removeProduct(product.id)}>Eliminar</button>
            </div>

        </div>
    )
}

export default ItemCart