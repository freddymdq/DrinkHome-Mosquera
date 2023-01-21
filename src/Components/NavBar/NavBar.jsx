import CartWidget from "./CartWidget"


const NavBar = () => {
    return (
        <>
            <nav>
                <div className="navbar bg-neutral">
                    <div className="flex-1">
                        <a className="btn btn-ghost normal-case text-xl text-white font-bold">Drink Home</a>
                    </div>
                    <div className="flex-none">
                        <ul className="menu menu-horizontal px-1 text-white">
                            <li>
                                <a>Whisky</a>
                                <a>Spirits</a>
                                <a>Aperitive</a>                           
                            </li>
                        </ul>
                        <CartWidget />
                    </div>
               
                </div>
            </nav>
        </>
    )
}

export default NavBar