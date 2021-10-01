import React  from 'react';
import "./style.css"
import {NavLink, useHistory, useLocation} from "react-router-dom";
import logo from "./../assets/imgs/logo.jpg"

const TheHeader = () =>{

    const history = useHistory();
    const location = useLocation();

    return (
        <div className="header">
            <div className="container">
                <div className="logo">
                    <NavLink to="/home">
                        <img src={logo} style={{width:"80px" , height: "auto"}}/>
                    </NavLink>
                </div>
                <div className="navbar">
                    <ul>
                        <li>
                            <NavLink to="/home" exact activeStyle={{ color: '#2a6496' }}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/performance" exact activeStyle={{ color: '#2a6496' }}>Performance</NavLink>
                        </li>
                        <li>
                            <NavLink to="/scatterplots" exact activeStyle={{ color: '#2a6496' }}>Scatterplots</NavLink>
                        </li>
                        <li>
                            <NavLink to="/backtest" exact activeStyle={{ color: '#2a6496' }}>Backtest</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" exact activeStyle={{ color: '#2a6496' }}>Contact</NavLink>
                        </li>
                        <li>
                            <a onClick={()=>{
                                localStorage.removeItem("token");
                                history.push("/login");
                            }}>Logout</a>
                            {/*<a className="cursor" >Login</a>*/}
                        </li>
                    </ul>
                </div>
                <div className="clear"></div>
                {/*{showLoginForm ? <Login onClose={this.loginClose} /> : null}*/}
            </div>
        </div>
    );
}

export default React.memo(TheHeader);
