import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"


const ItemDetailContainer = () => {
  const { idProducto } = useParams()
  console.log(idProducto)
// mocks con id 
  return (
    <div className="border border-5 border-danger  m-3">
      <ItemDetail />
    </div>
  )
}

export default ItemDetailContainer



/* import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import { gFetch } from "../Productos/gFetch"


const ItemDetailContainer = () => {
  const {id} = useParams()
  const [item, setItem] = useState({})

  const getProduct = () => new Promise ((resolve, reject)=>{
    setTimeout(()=> resolve(gFetch.find(product => product.id == id)),2000)
  })
  useEffect(() => {
    getProduct()
    .then(response=>setItem(response))
  },[])

  return (
    <div>
       <h1>{item.title}</h1>
    </div>
)

}
export default ItemDetailContainer */