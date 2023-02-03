import { Button } from "../Common/Button"


export const Hero = () => {
    return (
        <>
            <div className="hero min-h-screen bg-neutral">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold text-black">Bienvenido</h1>
                        <p className="py-6 text-white"><span className="font-bold text-black  font.">DrinkHome</span> puede solicitar información adicinal para verificar la identidad de tu persona o empresa.  
                        <span className="font-bold"> Acepto los terminos y condiciones</span>, junto con las politicas privadas de <span className="font-bold text-black font.">DrinkHome</span> </p>
                        <Button className="btn btn-primary" type="submit"> 
                            Soy mayor de edad +18 
                        </Button>
                        
                    </div>
                </div>
            </div>
        </>
    )
}