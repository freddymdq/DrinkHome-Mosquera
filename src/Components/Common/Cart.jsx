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
    <div className="bg-[#151515]">
      <h1 className="text-warning text-center font-bold text-5xl pt-[95px]">SU ORDEN DE COMPRAS</h1>
      <div className=" flex flex-wrap justify-center pt-[60px]">
      { 
        cart.map(product => <ItemCart key={product.id} product={product}/>)
      }
      </div>
      <p className="text-warning font-black text-center text-5xl p-5">TOTAL: ${totalPrice()}</p>
      <div className="text-center">
        <Link to={`/categoria`}> <button className="btn btn-ghost text-warning mt-11 mb-[95px]">Elegir mas productos</button> </Link>
      </div>
    </div>
  )
}
export default Cart;