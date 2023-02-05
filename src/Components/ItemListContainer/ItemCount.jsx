import { useState } from "react"


export const ItemCount = ({ stock }) => {

    const [count, setCount] = useState(1)
    const onAddHandler = () =>{
        if (count < stock){
            setCount( count => count + 1 )
        }
    }

    const onSubHandler = () => {
        if (count >= 1) {
            setCount (count => count - 1)
        }
    }

    return (
        <div className="grid grid-cols-3 text-red  md:grid-cols-[1fr_1.9fr] gap-4">
            <div className="col-span-3 text-2xl px-5 rounded-md py-4 flex item-center justify-between md:col-span-1 bg-neutral-400">
            <button onClick={onSubHandler} className="text-3xl font-black text-neutral-900">-</button>
                <span className="text-normal text-white">{count}</span>
            <button onClick={onAddHandler} className="text-3xl font-black text-neutral-900">+</button>
            </div>
            <div className="col-span-3 flex gap-5 items-center justify-center md:col-span-1 mt-3">
                <button className="btn btn-primary">COMPRAR</button>
            </div>
        </div>
    )
}

export default ItemCount