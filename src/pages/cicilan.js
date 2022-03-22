import React from "react";

export default class Cicilan extends React.Component {
    constructor(){
        super()
            this.state = {
                nominal: 0,
                bunga: 0,
                bulan: 0,
                totalbunga: 0,
                totalbulan: 0,
                hasil : 0
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
        let nominal = this.state.nominal
        let bunga = this.state.bunga
        let bulan = this.state.bulan
        let hitungBulan = Number(nominal) / Number(bulan)
        let hitungBunga = Number(hitungBulan) * Number(bunga/100)
        let hitung = Number(hitungBunga) + Number (hitungBulan)
        this.setState({
            hasil: hitung
        })
    }
    render() {
        return (
            <div className='container'>
                <div className="container col-lg-6 col-sm-12 p-2 mt-5 border border-dark border-2 bg-light">
                    <div className="card-header bg-primary">
                        <h3 className="text-center"> Calculator Cicilan </h3>
                    </div>
                    <div className="card-body">
                    <form onSubmit={this.hasilJumlah}>
                        <h5>Nominal</h5>
                        <input className='form-control' name='nominal' onChange={this.changeState}/>
                        <h5>Bunga</h5>
                        <input className='form-control' name='bunga' onChange={this.changeState}/>
                        <h5>Bulan</h5>
                        <select className="form-control" name="bulan" value={this.state.bulan} onChange={this.changeState}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                        </select>
                        <br/>
                        <div className="d-grid gap-2">
                            <button className="btn btn-primary text-dark" type="submit">Hitung</button>
                        </div>
                        <h5 className="mt-4 text-center">HASIL</h5>
                        <span className="d-block p-2 bg-info text-dark mt-3 text-center"> Rp. {this.state.hasil},00</span>
                    </form>
                    </div>
                </div>
            </div>
        )
    }
}