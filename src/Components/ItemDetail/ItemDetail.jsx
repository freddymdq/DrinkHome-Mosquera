

import { useEffect, useState } from "react"
import { gFetch } from "../Productos/gFetch"
import {ItemCount} from '../ItemListContainer/ItemCount'
import { useParams } from "react-router-dom"

/* 
export const ItemDetail = (
    {title, description, stock, price, foto }
) => {

    const [item, setItem] = useState([])

    useEffect(() => {
        getItemDetail()
        .then(res => {
            setItem(res)
        })
        .catch(err => {console.log(err)})
    }, [])

    const getItemDetail = () => {
        return new Promise ( (resolve, reject)  => {
          setTimeout(() => {
            resolve(gFetch)
          },1000)  
        })
     } */

     export const ItemDetail =({}) => {
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

    }, 1000)
    

    return (
        <>
        { productos.map(producto =>   (
            <div key={producto.id} className='card w-25 mt-2' >
                <div className="flex flex-col mt-[90px] gap-5">
                    <section className="container bg-neutral rounded-[50px] mx-auto px-8 py-8 flex flex-col">
                    <figure><img src= {producto.foto} alt="Whisitem.ky" /></figure>
                    <p className="text-white font-black text-7xl pb-5">{producto.title}</p>
                    <h2 className="text-neutral-600 font-bold text-3xl">{producto.description}</h2>
                    <p className="text-base-300 pt-12">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus voluptatibus, explicabo fugiat nam atque quo maxim. Lorem ipsum dolor sit amet consectetur adipisicing elit. In modi voluptatum ducimus magni eaque ipsum, esse odit nisi aliquam</p>
                    <p className="text-base-300 pt-12">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus voluptatibus, explicabo fugiat nam officiis cumque esse voluptate atque quo maxim</p>
                        <div className="pt-12 mt-[50px]">
                            <span className="text-green-700 font-bold text-5xl pb-5">${producto.price}</span>
                        </div>
                    <ItemCount stock={producto.stock}/>
                    </section>
                </div>
            </div>
        )
        )}
            
        </>
    )
}

export default ItemDetail 