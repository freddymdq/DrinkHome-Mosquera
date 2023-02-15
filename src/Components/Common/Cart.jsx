import React from "react";
import { Link } from "react-router-dom";

export const Cart = () => {
  return (
    <div className="bg-[#151515] h-[100vh] text-center">
      <h1 className="text-warning font-bold pt-[50px]">CARRITO</h1>
      <Link to={`/categoria`}> <button className="btn btn-ghost text-warning mt-11">Volver</button> </Link>
    </div>
  )
}
export default Cart