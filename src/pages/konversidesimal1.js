import React from "react"

export default class KonversiDesimal extends React.Component{
    constructor(){
        super()
        this.state = {
            desimal: 0,
            oktal: 0,
            biner: 0,
            heksadesimal: 0,
            konversi: "",
            hasil_desimal: 0
        }
    }
    changeState = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    hasilJumlahDesimal = (e) => {
        e.preventDefault()
        let desimal = this.state.desimal
        let konversi = this.state.konversi

        let biner = parseInt(desimal).toString(2);
        let oktal = parseInt.desimal.toString(8);
        let heksadesimal = parseInt.desimal.toString(16);0
    
        if (konversi == "biner") {
            this.setState({
                hasil_desimal : biner
            })
        } else if (konversi == "oktal"){
            this.setState({
                hasil_desimal : oktal
            })
        }
        else if (konversi == "heksadesimal")  {
            this.setState({
                hasil_desimal : heksadesimal
            })
        } 
    }
    render(){
        return(
            <div className="container">
                <div className="container col-lg-6 col-sm-12 p-2 borde-danger border-2 mt-5 bg-light">
                    <div className=" card-header bg-danger">
                        <h3 className="text-center"> Konversi Desimal </h3>
                    </div>
                    <div className="card-body">
                        <form onSubmit={this.hasilJumlahDesimal}>
                            <p>Desimal</p>
                            <input className='form-control' name='desimal' onChange={this.changeState}/>
                            <p>Pilihan Konversi</p>
                            <select className="form-select" name='konversi' onChange={this.changeState}>
                                <option selected></option>
                                <option value="biner">Biner</option>
                                <option value="oktal">Oktal</option>
                                <option value="heksadesimal">Heksadesimal</option>
                            </select>
                            <br/>
                            <div className="d-grid gap-2">
                                <button className="btn btn-danger" type="submit">Hitung</button>
                            </div>
                        <h5 className="mt-4 text-center">HASIL</h5>
                        <span className="d-block p-2 bg-info text-dark mt-3 text-center">{this.state.hasil_desimal}</span>
                        </form>
                    </div>
                </div>
                <br />
            </div>
            
        )
    }
}