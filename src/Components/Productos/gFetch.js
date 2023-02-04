

let products = [
    {
        id: 1, 
        title:"SWING", 
        description: "Delux whisky reserve ", 
        price:23780, 
        stock:4, 
        foto: 'https://ibb.co/2dzkhXV'

    },
    {
        id: 2, 
        title:"J. WALKER", 
        description: "Red Label", 
        price:8780, 
        stock:10, 
        foto: 'https://ibb.co/S3sc6Pw'
    },
    {
        id: 3, 
        title:"J. WALKER", 
        description: "Black Label", 
        price:11780, 
        stock:7, 
        foto: 'https://ibb.co/k2ybBDk'
    },
    {
        id: 4, 
        title:"SINGLETON", 
        description: "Excelence Whisky reserve", 
        price:13780, 
        stock:11, 
        foto:'https://ibb.co/CmnjbRc'
    },
    {
        id: 5, 
        title:"ZACAPA", 
        description: "Delux Ron destile reserve", 
        price:18780, 
        stock:12, 
        foto: 'https://ibb.co/f9VB5kT'
    },
    {
        id: 6, 
        title:"SHERIDANS", 
        description: "Aperitive", 
        price:11780, 
        stock:9, 
        foto: 'https://ibb.co/1v6RrjD',
    }
]
export const gFetch = () => {
    return new Promise(( resolve, reject )=>{    
      setTimeout(()=>{
        resolve( products )
      }, 2000) 
   })
  
  } 