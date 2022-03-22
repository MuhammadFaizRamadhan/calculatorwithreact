import React from "react"

export default class KonversiHeksadesimal extends React.Component{
    constructor(){
        super()
        this.state = {
            desimal: 0,
            oktal: 0,
            biner: 0,
            heksadesimal: 0,
            konversi: "",
            hasil_heksadecimal: 0
        }
    }
    changeState = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    hasilJumlahHeksadesimal = (e) => {
        e.preventDefault()
        let heksadesimal = this.state.heksadesimal
        let konversi = this.state.konversi

        let desimal = parseInt(heksadesimal, 16);
        let biner = parseInt(heksadesimal, 16).toString(2);
        let oktal = parseInt(heksadesimal, 16).toString(8);
        
        if (konversi === "desimal") {
            this.setState({
                hasil_heksadecimal : desimal
            })
        } else if (konversi === "biner"){
            this.setState({
                hasil_heksadecimal : biner
            })
        }
        else if (konversi === "oktal")  {
            this.setState({
                hasil_heksadecimal : oktal
            })
        } 
    }
    render(){
        return(
            <div className="container">
                <div className="container col-lg-6 col-sm-12 p-2 borde-danger border-2 mt-5 bg-light">
                    <div className=" card-header bg-danger">
                        <h3 className="text-center"> Konversi Heksadesimal </h3>
                    </div>
                    <div className="card-body">
                        <form onSubmit={this.hasilJumlahHeksadesimal}>
                            <h5>Heksadesimal</h5>
                            <input className='form-control' name='heksadesimal' onChange={this.changeState}/>
                            <h5>Pilihan Konversi</h5>
                            <select className="form-select" name='konversi' onChange={this.changeState}>
                                <option selected></option>
                                <option value="desimal">Desimal</option>
                                <option value="biner">Biner</option>
                                <option value="oktal">Oktal</option>
                            </select>
                            <br/>
                            <div className="d-grid gap-2">
                                <button className="btn btn-danger" type="submit">Hitung</button>
                            </div>
                        <h5 className="mt-4 text-center">HASIL</h5>
                        <span className="d-block p-2 bg-info text-dark mt-3 text-center">{this.state.hasil_heksadecimal}</span>
                        </form>
                    </div>
                </div>
                <br />
            </div>
        )
    }
}