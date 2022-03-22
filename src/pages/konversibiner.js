import React from "react"

export default class KonversiBiner extends React.Component{
    constructor(){
        super()
        this.state = {
            desimal: 0,
            oktal: 0,
            biner: 0,
            heksadesimal: 0,
            konversi: "",
            hasil_biner: 0
        }
    }
    changeState = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    hasilJumlahBiner = (e) => {
        e.preventDefault()
        let biner = this.state.biner
        let konversi = this.state.konversi

        let desimal = parseInt(biner, 2);
        let oktal = parseInt(biner, 2).toString(8);
        let heksadesimal = parseInt(biner, 2).toString(16);
    
        if (konversi === "desimal") {
            this.setState({
                hasil_biner : desimal
            })
        } else if (konversi === "oktal"){
            this.setState({
                hasil_biner : oktal
            })
        }
        else if (konversi === "heksadesimal")  {
            this.setState({
                hasil_biner : heksadesimal
            })
        } 
    }
    render(){
        return(
            <div className="container">
                <div className="container col-lg-6 col-sm-12 p-2 borde-danger border-2 mt-5 bg-light">
                    <div className=" card-header bg-danger">
                        <h3 className="text-center"> Konversi Biner </h3>
                    </div>
                    <div className="card-body">
                        <form onSubmit={this.hasilJumlahBiner}>
                            <h5>Biner</h5>
                            <input className='form-control' name='biner' onChange={this.changeState}/>
                            <h5>Pilihan Konversi</h5>
                            <select className="form-select" name='konversi' onChange={this.changeState}>
                                <option selected></option>
                                <option value="desimal">Desimal</option>
                                <option value="oktal">Oktal</option>
                                <option value="heksadesimal">Heksadesimal</option>
                            </select>
                            <br/>
                            <div className="d-grid gap-2">
                                <button className="btn btn-danger" type="submit">Hitung</button>
                            </div>
                        <h5 className="mt-4 text-center">HASIL</h5>
                        <span className="d-block p-2 bg-info text-dark mt-3 text-center">{this.state.hasil_biner}</span>
                        </form>
                    </div>
                </div>
                <br />
            </div>
        )
    }
}