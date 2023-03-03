import React, {useState,useContext } from "react" 


const ModalContext = React.createContext([]);
const ModalProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [mensaje, setMensaje] = useState("");

    const showModal = () => {
    setIsOpen(true);
    };
    const closeModal = () =>{
        setIsOpen(false)
    };
    const setModalMensaje = (text)=>{
        setMensaje(text);
    };

    return (
        <ModalContext.Provider value = {{showModal, closeModal, setModalMensaje}}>
        {children}
        {isOpen && 
            <div className="bg-[#151515] flex justify-center">
                <h3 className="btn btn-ghost text-warning text-bold text-center mb-12">{mensaje}</h3>
            </div>}
        </ModalContext.Provider>
    );
};

export const useModalContext = ()=> useContext(ModalContext);
export {ModalProvider};

