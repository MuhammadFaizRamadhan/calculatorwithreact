import React from "react";
import { Link } from "react-router-dom";
import '../style/navbar.css'
export default class Navbar extends React.Component {
    render () {
        return (
            <div className="">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark " >
                    <div className="container-fluid">
                        <a className="navbar-brand ms-5" >Calculator</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto me-5">
                            <li className="nav-item dropdown">
                                <a className="nav-link  dropdown-toggle" data-bs-toggle="dropdown">  Konversi  </a>
                                <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to='/konversidesimal'> Konversi Desimal</Link></li>
                                <li><Link className="dropdown-item" to='/konversibiner'> Konversi Biner </Link></li>
                                <li><Link className="dropdown-item" to='konversiheksadesimal'> Konversi Heksadesimal  </Link></li>
                                <li><Link className="dropdown-item" to='/konversioktal' > Konversi Oktal  </Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                            <Link to='/bmi' className="nav-link">BMI</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to='/cicilan'>Cicilan</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to='/hargaakhir'>Harga Akhir</Link>
                            </li>
                        </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}