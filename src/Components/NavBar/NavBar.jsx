import CartWidget from "./CartWidget"

const NavBar = () => {
    return (
        <>
            <div className="navbar bg-neutral">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-neutral text-white font-bold  rounded-box w-52">
                            <li><a>Whisky</a></li>
                            <li><a>Spirits</a></li>
                            <li><a>Aperitivos</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl text-white">DRINHOME</a>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-white font-bold">
                        <li><a>Whisky</a></li>
                        <li><a>Spirits</a></li>     
                        <li><a>Aperitivos</a></li>
                    </ul>
                </div>
                <CartWidget/>
            </div>
        </>
    )
}


export default NavBar


