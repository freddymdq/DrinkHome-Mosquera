import { Button } from "../Common/Button";
import {ItemCount} from "../ItemListContainer/ItemCount"

export const ItemDetail = ({ data }) => {
 
  return (

    < div className="bg-black ">
      <div className="flex flex-col  gap-5 bg-[#151515] items-center ">
          <div key={data.id} className="container-full mb-[50px]  w-[500px] h-[700px] mt-[50px]  rounded-[30px] bg-black mx-auto relative flex justify-center">
            <section className="container  bg-black items-center justify-center rounded-[50px] px-8 py-8 flex flex-col">
              <p className="text-warning font-black text-5xl pb-2 mt-5">{data.title}</p>
              <img src= {data.foto} width="180px" alt="Whisky"/>
              <h2 className="text-white font-bold text-3xl text-center">{data.description}</h2>
              <p className="text-base-300 pt-1 text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus voluptatibus, explicabo fugiat nam atque quo maxim.</p>
                <div className="pt-1 ">
                  <span className="text-warning font-bold text-5xl mt-5">${data.price}</span>
                </div>
                   <ItemCount stock={data.stock}/> 
              </section>
          </div>
      </div>
      {/* <Button>
          Productos
      </Button> */}
    </div>
  )
};

export default ItemDetail;

