import { addDoc, collection, getFirestore } from "firebase/firestore";
import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../Context/CartContext";




const ModalCompra = () => {

    const { cart , totalPrice} = useCartContext();

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
        .then(({ id }) => console.log("Guardado en FireStore", id))
      }

    return (
        <div >
            <label htmlFor="my-modal-6" className="btn btn-ghost text-warning mb-12 bg-black" onClick={handleClick}>EMITIR COMPRA</label>
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle  bg-[#151515c2] shadow-black">
                <div className="modal-box bg-black">
                    <h3 className="font-bold  text-warning text-2xl">COMPRA REALIZADA CON EXITO</h3>
                    <p className="py-4 text-white pt-5">Gracias por confiar en nosotros</p>
                    <div className="modal-action">
                        <Link to="/home">
                            <label htmlFor="my-modal-6" className="btn btn-ghost text-warning">FINALIZAR</label>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalCompra