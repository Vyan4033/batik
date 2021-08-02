//@ts-check

import Link from "next/link";


const Side = ({children}) => {
    return(
        <div>
            <div className="container-fluid">
                <div className="row flex-nowrap">
                    <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
                        <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                            <a className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                                <span className="fs-2 d-none d-sm-inline">Toko Batik Banyuwangi</span>
                            </a>
                            <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                                <li>
                                    <ul className="collapse show nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
                                        <li>
                                            <a className="nav-link px-0 align-middle">
                                                <i className="fs-4 bi-table" /><span className="ms-1 d-none d-sm-inline"></span></a>
                                        </li>
                                        <li>
                                            <a className="nav-link px-0 align-middle">
                                                <i className="fs-4 bi-table" /><span className="ms-1 d-none d-sm-inline"></span></a>
                                        </li>
                                        <li className="w-100">
                                            <Link href="/admin/HomeAdmin">
                                                <a className="nav-link px-0"> <span className="d-none d-sm-inline">Home</span></a>
                                            </Link>
                                        </li>
                                        <li className="w-100">
                                            <Link href="/admin/DataBatik">
                                                <a className="nav-link px-0"> <span className="d-none d-sm-inline">Data Batik</span></a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/admin/CreateBatik">
                                                <a className="nav-link px-0"> <span className="d-none d-sm-inline">Tambah Data Batik</span></a>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <hr />
                            <div className="pb-4">
                                <a href="/" className="d-flex align-items-center text-white text-decoration-none">
                                    <span className="d-none d-sm-inline mx-1">Keluar</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col py-3">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Side