import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"


const ItemDetailContainer = () => {
  const { idProducto } = useParams()
  console.log(idProducto)
  
  return (
    <div className="border border-5 border-danger  m-3"> 
      <ItemDetail />
    </div>
  )
}

export default ItemDetailContainer