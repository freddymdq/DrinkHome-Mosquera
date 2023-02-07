import {ItemCount} from "../ItemListContainer/ItemCount"

export const ItemDetail = ({ data }) => {
 
  return (
     
    < div className="bg-neutral">
      <div className="flex flex-col  gap-5 bg-black items-center ">
          <div key={data.id} className="container-full mb-[50px]  w-[400px] mt-[50px] h-[600px] m-t rounded-[30px] bg-neutral mx-auto relative flex justify-center">
            <section className="container  bg-neutral items-center rounded-[50px] px-8 py-8 flex flex-col">
              <img src= {data.foto} width="100px" alt="Whisky"/>
              <p className="text-white font-black text-5xl pb-2">{data.title}</p>
              <h2 className="text-neutral-600 font-bold text-3xl">{data.description}</h2>
              <p className="text-base-300 pt-1 ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus voluptatibus, explicabo fugiat nam atque quo maxim.</p>
                <div className="pt-1 ">
                  <span className="text-green-700 font-bold text-5xl pb-5">${data.price}</span>
                </div>
                   <ItemCount stock={data.stock}/> 
              </section>
          </div>
      </div>
    </div>
  )
};

export default ItemDetail;


