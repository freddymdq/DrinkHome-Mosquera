import { useState, useEffect } from "react"

export const ItemCount = ({initial, stock, onAdd}) => {

    const [count, setCount] = useState(parseInt(initial));

    const decrease = () => {
        setCount(count - 1);}

    const increase = () => {
        setCount(count + 1);}

    useEffect(() => {
        setCount(parseInt(initial))
    }, [initial])

    return (

        
        <div className="grid grid-cols-3 text-red  md:grid-cols-[1fr_1fr] gap-4">
            <div className="col-span-3 text-2xl  rounded-md py-4 gap-5 flex item-center justify-between md:col-span-1 bg-neutral-400">
                <button className='className="text-3xl font-black text-[#FFBF00]' disabled={count <= 1} onClick={decrease}> - </button>
                    <span className="text-normal text-white p-5 mt-1">{count}</span>
                <button className='text-3xl font-black text-[#FFBF00]' disabled={count >= stock} onClick={increase}>  +  </button>
            </div>
            <div className="col-span-3 flex gap-5 items-center justify-center md:col-span-1 mt-3">
                <button className='btn btn-outline btn-warning font-bold' disabled={stock <= 0} onClick={() => onAdd(count)}>agregar al carrito</button>
            </div>      
        </div>
    );
}

export default ItemCount