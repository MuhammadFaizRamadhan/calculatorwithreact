import React from "react";
import Bmi from "./pages/bmi";
import Cicilan from "./pages/cicilan";
import HargaAkhir from "./pages/harga_akhir";
import KonversiDesimal from "./pages/konversidesimal";
import KonversiBiner from "./pages/konversibiner";
import KonversiOktal from "./pages/konversioktal";
import KonversiHeksadesimal from "./pages/konversiheksadesimal";
import {Route, Switch} from 'react-router-dom' 

export default class Main extends React.Component {
    render() {
        return(
            <Switch>
                <Route exact path='/bmi' component={Bmi} />
                <Route path='/cicilan' component={Cicilan} />
                <Route path='/hargaakhir' component={HargaAkhir} />
                <Route path='/konversidesimal' component={KonversiDesimal} />
                <Route path='/konversibiner' component={KonversiBiner} />
                <Route path='/konversioktal' component={KonversiOktal} />
                <Route path='/konversiheksadesimal' component={KonversiHeksadesimal} />

            </Switch>
        )
    }
}