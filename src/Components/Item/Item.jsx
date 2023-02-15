import { Link } from "react-router-dom";
import React, {useContext} from "react";
import { CartContext } from "../../Context/CartContext";

const Item = ({data}) => {
    const nombre = useContext(CartContext)
    console.log('item', nombre)

    return(
        <Link to={`/detalle/${data.id}`}></Link>
    )
}

export default Item