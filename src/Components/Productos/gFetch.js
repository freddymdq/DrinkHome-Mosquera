
let products = [
    {id: 1, title:"SWING", description: "Delux whisky reserve ", price:23780, stock:13, foto: 'https://i.ibb.co/3Bhwm06/img-swing.png',categoria: 'whisky'},
    {id: 2, title:"J. WALKER", description: "Red Label", price:8780, stock:10, foto: 'https://i.ibb.co/VVyb8kt/jhonnie-walker-red-label.png',categoria: 'whisky'},
    {id: 3,  title:"J. WALKER", description: "Black Label", price:11780,  stock:29,  foto: 'https://i.ibb.co/RzYCMS5/jhonnie-walker.png',categoria: 'whisky'},
    {id: 4, title:"SINGLETON", description: "Whisky reserve", price:13780, stock:11,  foto:'https://i.ibb.co/0MLB74Z/img-the-singleton.png', categoria:'whisky'},
    {id: 5, title:"ZACAPA", description: "Delux Ron destile ", price:18780, stock:12,  foto: 'https://i.ibb.co/0MWFj0D/img-zunca.png',categoria:'spirits'},
    {id: 6, title:"SHERIDANS",  description: "Aperitive",  price:11780, stock:14, foto: 'https://i.ibb.co/G9rs3xn/img-sheridan.png',categoria: 'spirits'},
    {id: 7, title:"VAT 69", description: "Whisky", price:2280,  stock:31,  foto: 'https://i.ibb.co/N9j6h1c/VAT-69-Whisky.png',categoria: 'whisky'},
    {id: 8, title:"TANQUERRAY", description: "London Dry Gin", price:2680, stock:21, foto: 'https://i.ibb.co/hRpvrhr/tanqueray-london-dry-gin.png',categoria: 'spirits'},
    {id: 9, title:"TANQUERRAY", description: "Flor de Sevilla", price:2480, stock:29, foto: 'https://i.ibb.co/L9j6zzV/tanqueray-flor-de-sevilla-gin.png',categoria: 'spirits'},
    {id: 10, title:"BAILEYS", description: "Aperitive Caramel", price:2280, stock:23,  foto: 'https://i.ibb.co/FK7X2sK/baileys.png',categoria: 'aperitive'},
    {id: 11, title:"SMIRNOFF", description: "Vodka Green Apple ", price:1880, stock:17, foto: 'https://i.ibb.co/mC9Dvxv/smirnoff-apple.png',categoria: 'spirits'},
    {id: 12, title:"KETEL ONE", description: "Vodka LimitOne", price:1880, stock:19, foto: 'https://i.ibb.co/hM1sRgP/Ketel-One-VODKA.png',categoria: 'spirits'},
    {id: 13, title:"ZACAPA",  description: "Ron Deliz Victory", price: 21880,  stock:39, foto: 'https://i.ibb.co/qN48MP7/ron-deliz-zacapa.png',categoria: 'spirits'},
    {id: 14, title:"GRAND OLD PARR", description: "Whisky Aged 12 Year", price: 12880, stock:19, foto: 'https://i.ibb.co/TbqqJ3k/grand-old-parr-whisky.png',categoria: 'whisky'},
    {id: 15, title:"CARDHU", description: "Whisky Aged 20 Year", price: 12880, stock:21, foto: 'https://i.ibb.co/jwgDDPT/cardhu.png',categoria: 'whisky'},
    {id: 16, title:"BUCANANS", description: "Whisky Deluxe", price: 12880, stock:20, foto: 'https://i.ibb.co/cFQRMQk/bucanans-delixe-whisky.png',categoria: 'whisky'},
]

export const gFetch = ({idCategoria, q}) => {
    return new Promise(( resolve, reject ) => {
        setTimeout(() =>{
            let resp = products
            if(idCategoria)
                resp = resp.filter(product=>product.categoria === idCategoria)
            if(q)
                resp = resp.filter(producto=>producto.title.toLowerCase().includes(q))
            resolve(resp)
        },1000)
    })
}





