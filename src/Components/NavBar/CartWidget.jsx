import { Link } from "react-router-dom"
import { useCartContext } from "../../Context/CartContext"

export const CartWidget = () => {
    const {totalProduct} = useCartContext();
    const {totalPrice} = useCartContext();


    return (
        <>
            <div className="flex-none">
                <div className="dropdown dropdown-end text-center">
                    <label tabIndex={0} className="btn btn-outline bg-warning text-black btn-circle">
                        <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                            <span className="badge badge-sm indicator-item #FFBF00">{totalProduct() || ""}</span>
                        </div>
                    </label>
                    <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-black shadow items-center">
                        <div className="card-body">
                            <span className="font-bold text-lg text-warning ">Items {totalProduct() || ""}</span>
                            <span className="text-info ">Total ${totalPrice()}</span>
                            <div className="card-actions items-center">
                                    <Link to="/cart" className="btn btn-ghost text-warning mt-3 ">VER CARRITO</Link>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartWidget