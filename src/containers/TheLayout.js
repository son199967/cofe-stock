import React, {useState} from "react";
import TheHeader from "./TheHeader";
import {Route, Switch} from "react-router-dom";
import Home from "../views/home";
import TheFooter from "./TheFooter";
import TheContent from "./TheContent";

const TheLayout = () => {


    return (
        <>

            <div>
                <TheHeader/>
                <TheContent/>


                {/*<TheFooter />*/}
            </div>
        </>
    )
}

export default TheLayout;
