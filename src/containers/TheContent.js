import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import Home from "../views/home";
import Performance from "../views/performance";
import Scatterplots from "../views/scatterplots";
import BackTest from "../views/backtest";

const TheContent = () => {
    return(
        <>
            <div className="wrapper">
                <div style={{marginTop:"70px"}}>
                    <Switch>
                        <Route path={"/home"} exact component={Home} />
                        <Route path={"/performance"} component={Performance} />
                        <Route path={"/scatterplots"} component={Scatterplots} />
                        <Route path={"/backtest"} component={BackTest} />
                        {/*<Route path={"/contact"} component={Contact} />*/}
                        {/*<Route component={ErrorPage} />*/}
                    </Switch>
                    {/*<Redirect from="/" to="/home" />*/}
                </div>

            </div>
        </>
    )
}

export default TheContent;
