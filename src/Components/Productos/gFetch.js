
let products = [
    {
        id: 1, 
        title:"SWING", 
        description: "Delux whisky reserve ", 
        price:23780, 
        stock:4, 
        foto: 'https://i.ibb.co/3Bhwm06/img-swing.png',
        categoria: 'whisky'

    },
    {
        id: 2, 
        title:"J. WALKER", 
        description: "Red Label", 
        price:8780, 
        stock:10, 
        foto: 'https://i.ibb.co/VVyb8kt/jhonnie-walker-red-label.png',
        categoria: 'whisky'
    },
    {
        id: 3, 
        title:"J. WALKER", 
        description: "Black Label", 
        price:11780, 
        stock:7, 
        foto: 'https://i.ibb.co/RzYCMS5/jhonnie-walker.png',
        categoria: 'whisky'
    },
    {
        id: 4, 
        title:"SINGLETON", 
        description: "Excelence Whisky reserve", 
        price:13780, 
        stock:11, 
        foto:'https://i.ibb.co/0MLB74Z/img-the-singleton.png',
        categoria:'whisky'
    },
    {
        id: 5, 
        title:"ZACAPA", 
        description: "Delux Ron destile reserve", 
        price:18780, 
        stock:12, 
        foto: 'https://i.ibb.co/0MWFj0D/img-zunca.png',
        categoria:'spirits'
    },
    {
        id: 6, 
        title:"SHERIDANS", 
        description: "Aperitive", 
        price:11780, 
        stock:9, 
        foto: 'https://i.ibb.co/G9rs3xn/img-sheridan.png',
        categoria: 'spirits'
    }
]

export const gFetch = () => {
    return new Promise(( resolve, reject ) => {
        setTimeout(() =>{
            resolve(products)
        },1500)
    })
}