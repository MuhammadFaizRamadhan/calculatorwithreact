import React from "react";
import "../style/bmi.css"

export default class Bmi extends React.Component {
    constructor(){
        super()
        this.state = {
            berat: 0,
            tinggi: 0,
            hasil: 0,
            status: ""
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
        let berat = this.state.berat
        let tinggi = this.state.tinggi
        let hasil = Number(berat) / (parseFloat(tinggi) * parseFloat(tinggi));
        this.setState({
            hasil: hasil
        })
        // let hasil = this.state.hasil
        if (hasil <= 18.5) {
            this.setState({
                status: "kekurangan berat badan"
            })
        } else if (hasil >= 18.5 && hasil <= 24.9){
            this.setState({
                status: "normal"
            })
        }
        else if (hasil >= 25.9 && hasil <= 29.9)  {
            this.setState({
                status: "kelebihan berat badan"
            })
        } else if (hasil >= 30){
            this.setState({
                status: "Kegemukan"
            })
        }
    }
    
    render(){
        return(
                <div className='container'>
                    <div className="container col-lg-6 col-sm-12 p-2 mt-5 border border-dark border-2 bg-light">
                        <div className="card-header bg-primary">
                            <h3 className="text-center"> Calculator BMI </h3>
                        </div>
                        <div className="card-body">
                        <form onSubmit={this.hasilJumlah} >
                            <h5 className="mt-2">Berat</h5>
                            <input className='form-control' name='berat' onChange={this.changeState}/>
                            <h5 className="mt-2">Tinggi</h5>
                            <input className='form-control' name='tinggi' onChange={this.changeState}/>
                            <br/>
                            <div className="d-grid gap-2">
                                <button className="btn btn-primary text-dark" type="submit">Hitung</button>
                            </div>
                            <h5 className="mt-4 text-center">HASIL</h5>
                            <span className="d-block p-2 bg-info text-dark mt-3 text-center"> Status: {this.state.status}</span>
                            <span className="d-block p-2 bg-info text-dark mt-3 text-center"> BMI: {this.state.hasil}</span>
                        </form>
                        </div>
                    </div>
                </div>
        )
    }
}