import React from "react";

export default class HargaAkhir extends React.Component {
    constructor() {
        super()
        this.state = {
            hargaAwal: 0,
            ppn: 0,
            diskon: 0,
            totalppn: 0,
            totaldisc: 0,
            hasil: 0,
        }
    }
    changeState = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    // => arrow function 
    hasilJumlah = (e) => {
        e.preventDefault()
        let hargaAwal = this.state.hargaAwal
        let ppn = this.state.ppn
        let diskon = this.state.diskon
    
        let hitungppn = Number(hargaAwal) * Number(ppn/100)
        let hitungdisc = Number(hargaAwal) * Number(diskon/100)
        let hitung = Number(hargaAwal) + Number(hitungppn) - Number(hitungdisc)
            
        this.setState({
            totalPPN: hitungppn,
            totaldisc: hitungdisc, 
            hasil: hitung
        })
    }

    render() {
        return(
            <div className="container">
                <div className="container col-lg-6 col-sm-12 p-2 mt-5 border border-dark border-2 bg-light">
                        <div className="card-header bg-danger">
                            <h3 className="text-center"> Calculator Harga Akhir </h3>
                        </div>
                        <div className="card-body">
                            <form onSubmit={this.hasilJumlah} >
                                <h5 className="mt-2">Harga Awal</h5>
                                <input className='form-control' name='hargaAwal' onChange={this.changeState}/>
                                <h5 className="mt-2">PPN</h5>
                                <input className='form-control' name='ppn' onChange={this.changeState}/>
                                <h5 className="mt-2">Diskon</h5>
                                <input className='form-control' name='diskon' onChange={this.changeState}/>
                                <br/>
                                <div className="d-grid gap-2">
                                    <button className="btn btn-danger text-dark" type="submit">Hitung</button>
                                </div>
                                <h5 className="mt-4 text-center">Harga Akhir</h5>
                                {/* <span className="d-block p-2 bg-gray text-dark mt-3 text-center">  {this.state.status}</span> */}
                                <span className="d-block p-2 bg-dark text-white mt-3 text-center"> Rp. {this.state.hasil},00</span>
                            </form>
                        </div>
                </div>
            </div>
        )
    }
}