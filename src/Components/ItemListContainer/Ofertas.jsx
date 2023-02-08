import React from 'react'

const Oferta = ({text, text2}) => {

  return (
    <>
    <div className='p-4 bg-black text-center text-white font-black text-7xl '> 
        {text}
    </div>
    <div className='p-4 bg-black  text-center text-3xl text-[#FFBF00]'>
        {text2}
    </div>
    </>
  )
}

export default Oferta