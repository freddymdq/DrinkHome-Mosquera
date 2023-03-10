
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"; 
import {getFirestore, doc, getDoc} from "firebase/firestore"


export const ItemDetailContainer = () => {
  const [data, setData] = useState({});
  const { detalleId } = useParams();

  useEffect(() => {
    const querydb = getFirestore();
    const queryDoc = doc(querydb, 'productos', detalleId );
      getDoc(queryDoc)
        .then(res =>setData({id: res.id, ...res.data()}))
  },[])

  return (
    
      <ItemDetail data={data} />
  )
}
export default ItemDetailContainer;

