import { useEffect, useState } from "react"
import { gFetch } from "../Productos/gFetch"
import { Link, useParams } from "react-router-dom"

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
        <div className="container-full h-[800px] pt-[70px] bg-neutral mx-auto  flex ">
            {/* <h1 className="">PRODUCTOS</h1> */}
        { productos.map(producto => (
            <div key={producto.id} className="container-lg w-[500px] h-[500px] m-t rounded-[30px] bg-neutral mx-auto relative flex justify-center">
                <Link to={`/detalle/${producto.id}`}>
                    <div>
                        <img src={producto.foto} width="200px" alt="Foto producto" />
                    </div>
                    <div className="flex flex-col items-center my-auto">
                        <h1 className="font-black text-3xl text-gray-200">{producto.title}</h1>
                        <p className="text-gray-200 mb-12">{producto.description}</p>
                        <h3 className="font-bold text-4xl text-green-500 mb-12">${producto.price}</h3>
                        <p className="text-white m-3">Stock Disponible: {producto.stock}</p>
                        
                        <button className="btn btn-primary">Ver detalles</button>      
                    </div>
                </Link>
            </div>
              )
            )}
        </div>
        )

    }
    

