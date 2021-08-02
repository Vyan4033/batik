//@ts-check

const Header = ({children}) => {
    return(
        <div className="d-flex w-100 h-100 p-3 mx-auto flex-column bg-dark text-white">
            <header className="mb-auto">
                <div>
                <h3 className="float-md-start mb-0">Toko Batik Banyuwangi</h3>
                <nav className="nav nav-masthead justify-content-center float-md-end">
                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                    <a className="nav-link" href="/user/InfoUser">Detail Batik</a>
                    <a className="nav-link" href="/admin/HomeAdmin">Admin</a>
                </nav>
                </div>
            </header>
            <div className="col py-3">
                {children}
            </div>
        </div>
    )
}

export default Header