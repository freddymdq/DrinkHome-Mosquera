import { useEffect, useState } from "react"
import { Link, useParams} from "react-router-dom"
import { Button } from "../Common/Button"
import Titulo from "./Title"
import { collection, getFirestore, getDocs, query, where } from "firebase/firestore"






export const ItemListContainer = ({}) => {
    const [productos, setProductos] = useState([]);
    const { idCategoria } = useParams();
   // const [search, setSearch] = useSearchParams();

   useEffect(()=>{
    const querydb = getFirestore();
    const queryCollections = collection(querydb, 'productos');

    const queryFilter = idCategoria ? query(queryCollections, where('categoria','==', idCategoria) ) : queryCollections 
    getDocs(queryFilter)
      .then(resp =>setProductos(resp.docs.map(product=>({id: product.id,...product.data()}))))
      .catch(err => console.log(err));
  },[idCategoria])


  // SIN FILTER
/*   useEffect (() => {
    const querydb = getFirestore();
    const queryCollection = collection (querydb, "productos");
    let q;
    if(idCategoria) {
      q = query(queryCollection, where("categoria", "==", idCategoria));
    }else {
      q = queryCollection;
    }
    getDocs(q).then((res) => 
    setProductos (
      res.docs.map((product)=> ({ id:product.id, ...product.data()}))
    )
    );
  }, {idCategoria}) */

    
    return (
      <div className="bg-[#151515] ">
        <div className="text-center shadow-2xl ">
          <Titulo text3="CATALOGO" />
        </div>
        <div className="mx-auto text-center bg-[#151515] flex flex-wrap gap-3 font-bold  justify-beetwend text-white pt-[30px] p-[50px]"> 
        { productos.map(producto => (
            <div key={producto.id} className="container-lg  mt-5 w-[400px]  rounded-[50px]  bg-black mb-[30px] mx-auto relative flex justify-center ">
                <Link to={`/detalle/${producto.id}`}>
                    <div className="mt-10 ">
                        <h1 className="font-black text-3xl text-warning">{producto.title}</h1>
                    </div>

                    <div className="flex flex-col items-center my-auto  ">
                        <img src={producto.foto} width="200px" alt="Foto producto" className="mt-[20px]" />
                        <p className="text-gray-200 text-2xl mb-4">{producto.description}</p>
                        <h3 className="font-bold text-4xl text-warning mb-4">${producto.price}</h3>
                        <p className="text-white m-2">Stock Disponible: {producto.stock}</p>
                        
                        <Button className="btn btn-ghost mb-5 text-warning " type="submit"> 
                            Ver detalles
                        </Button>      
                    </div>
                </Link>
            </div>
              )
              )}
        </div>
        </div>
        )

    }