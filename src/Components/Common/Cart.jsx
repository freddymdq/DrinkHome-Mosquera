import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../Context/CartContext";
import ItemCart from "../ItemCart/ItemCart";


export const Cart = () => {

    const { cart , totalPrice} = useCartContext();
      if (cart.length === 0){
        return (
          <div className="bg-[#151515] text-center h-[100vh]">
            <h1 className="text-warning font-bold pt-5">No hay productos en el Carrito</h1>
            <Link to={`/categoria`}> <button className="btn btn-ghost text-warning mt-11">Ir a Catalogo</button> </Link>
          </div>
        )
      } 


  return (
    <div className="bg-[#151515] h-[100vh] text-center">
      <h1 className="text-warning font-bold pt-[50px]">CARRITO</h1>
      { 
        cart.map(product => <ItemCart key={product.id} product={product}/>)
      }
      <p>TOTAL: {totalPrice()}</p>
      <Link to={`/categoria`}> <button className="btn btn-ghost text-warning mt-11">Volver</button> </Link>
    </div>
  )
}
export default Cart