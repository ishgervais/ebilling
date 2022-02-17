import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import BuyElectricityPage from "../pages/BuyElectricityPage";
import addmeter from "../pages/addmeter";
import addclient from "../pages/addclient";
import meterTokens from "../pages/meterTokens";

export default function PageRoutes() {
    return (
        <Router>
            <Route exact path="/" component={BuyElectricityPage} />
            <Route exact path="/meter-tokens" component={meterTokens} />
            <Route exact path="/addclient" component={addclient} />
            <Route exact path="/addmeter" component={addmeter} />
        </Router>
    )
}
