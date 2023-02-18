
import React from "react";
import { Link } from "react-router-dom";



const ModalCompra = () => {


    return (
        <div >
            <label htmlFor="my-modal-6" className="btn btn-ghost text-warning mb-12 bg-black">EMITIR COMPRA</label>
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle  bg-[#151515c2] shadow-black">
                <div className="modal-box bg-black">
                    <h3 className="font-bold  text-warning text-2xl">COMPRA REALIZADA CON EXITO</h3>
                    <p className="py-4 text-white">Gracias por confiar en nosotros</p>
                    <div className="modal-action">
                        <Link to="/categoria">
                            <label htmlFor="my-modal-6" className="btn btn-ghost text-warning">Ir a Inicio</label>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalCompra