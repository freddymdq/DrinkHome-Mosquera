import { addDoc, collection, getFirestore } from "firebase/firestore";
import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../Context/CartContext";
import ItemCart from "../ItemCart/ItemCart";
import { Button } from "./Button";
import ModalCompra from "./ModalCompra";


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

      const order = {
        buyer: {
          name:   "Federico",
          email:  "freddymdq@gmail.com",
          phone:  "+542235457223",
          addres: 'Magayanes 5100 - Buenos Aires'
        },
        items: cart.map(product => ({id: product.id, title: product.title, price: product.price, quantity: product.quantity})),
        total: totalPrice(),
      }
  
      const handleClick = () => {
        const db = getFirestore();
        const ordersCollection = collection(db, 'orders');
        addDoc(ordersCollection, order)
        .then(({ id }) => console.log(id))
      }


  return (
    <div className="bg-[#151515]">
      <h1 className="text-warning text-center font-bold text-5xl pt-[95px]">ORDEN DE COMPRAS</h1>
      <div className=" flex flex-wrap justify-center pt-[60px]">
      { 
        cart.map(product => <ItemCart key={product.id} product={product}/>)
      }
      </div>
      <p className="text-warning font-black text-center text-5xl  p-5">TOTAL: ${totalPrice()}</p>
      <div className="text-center">
        <Link to={`/categoria`}> <button className="btn btn-ghost bg-black text-warning mt-11 mb-[95px]">Elegir mas productos</button> </Link>
        <ModalCompra onClick={handleClick}/>
        {/* <button className="btn btn-ghost text-warning bg-black" onClick={handleClick}>Emitir Compra</button> */}
      </div>
    </div>
  )
}
export default Cart;