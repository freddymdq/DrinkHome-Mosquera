
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import {ItemCount} from "../ItemListContainer/ItemCount"
import { useCartContext } from "../../Context/CartContext";



export const ItemDetail = ({ data }) => {
  
  const [goToCart, setGoToCart] = useState(false);
  const {addProduct}  = useCartContext();


      const onAdd = (quantity) => {
          setGoToCart(true);
          addProduct(data, quantity)
          setGoToCart(!goToCart)
    } 
   


  return (

    < div className="bg-black ">
      <div className="mx-auto text-center bg-[#151515] flex flex-wrap  font-bold  justify-beetwend text-white pt-[30px] p-[50px]">
          <div key={data.id} className="container-lg  mt-5 w-[450px]  rounded-[50px]  bg-black mb-[30px] mx-auto relative flex justify-center ">
            <section className="container  bg-black items-center justify-center rounded-[50px] px-8 py-8 flex flex-col">
              <p className="text-warning font-black text-5xl pb-2 mt-5">{data.title}</p>
              <img src= {data.foto} width="180px" alt="Whisky"/>
              <h2 className="text-white font-bold text-3xl text-center">{data.description}</h2>
              <p className="text-base-300 pt-1 text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus voluptatibus, explicabo fugiat nam atque quo maxim.</p>
                <div className="pt-1 ">
                  <span className="text-warning font-bold text-5xl mt-5">${data.price}</span>
                </div>
                {
                        goToCart
                        ? <Link to="/category" className="text-warning mt-3 ">VER MAS PRODUCTOS</Link>
                        : <ItemCount initial={3} stock={data.stock} onAdd={onAdd}/> 
                    }
              </section>
          </div>
      </div>

    </div>
  )
};

export default ItemDetail;

