import { useEffect, useState } from "react"
import { gFetch } from "../Productos/gFetch"
import { Link, useParams } from "react-router-dom"
import { Button } from "../Common/Button"

export const ItemListContainer =({}) =>{

    const [productos, setProductos] = useState ([])
    const {idCategoria} = useParams()

    useEffect(()=> {
        if (idCategoria){
            gFetch()
            .then(res =>{
                setProductos(res.filter(producto => producto.categoria === idCategoria ))
            })
            .catch(error=>console.log(error))
        } else {
            gFetch()
            .then(res=>{
                setProductos(res)
            })
            .catch(error => console.log(error))
        }

    }, [idCategoria])

    return (
        <div className="mx-auto text-center  bg-neutral flex  flex-wrap  font-bold gap-5 justify-beetwend text-white pt-[30px]">
          {/*  <h1 className="">PRODUCTOS</h1>  */}
        { productos.map(producto => (
            <div key={producto.id} className="container-lg  mt-[70px] w-[350px]  rounded-[50px]  bg-black mb-[30px] mx-auto relative flex justify-center">
                <Link to={`/detalle/${producto.id}`}>
                    <div>
                        <img src={producto.foto} width="200px" alt="Foto producto" />
                    </div>
                    <div className="flex flex-col items-center my-auto">
                        <h1 className="font-black text-3xl text-gray-200">{producto.title}</h1>
                        <p className="text-gray-200 mb-10">{producto.description}</p>
                        <h3 className="font-bold text-4xl text-green-500 mb-12">${producto.price}</h3>
                        <p className="text-white m-2">Stock Disponible: {producto.stock}</p>
                        
                        <Button className="btn btn-success mb-5" type="submit"> 
                            Ver detalles
                        </Button>      
                    </div>
                </Link>
            </div>
              )
            )}
        </div>
        )

    }
    

