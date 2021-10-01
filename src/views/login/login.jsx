import React, {useEffect, useState} from "react";
import {Tabs, message} from 'antd';
import "./style.css"
import axiosWithOutToken from "./../../axios"
import axios from "axios";
import {BASE_URL} from "./../../axios";
import 'antd/dist/antd.css';
import {useHistory, useLocation} from "react-router-dom";

const {TabPane} = Tabs;

const Login = () => {
    const history = useHistory();
    const location = useLocation();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [usernameToSingUp, setUsernameToSingUp] = useState("");
    const [passwordToSingUp, setPasswordToSingUp] = useState("");
    const [repeatPasswordToSingUp, setRepeatPasswordToSingUp] = useState("");
    const [email, setEmail] = useState("");
    const [tab, setTab] = useState("1")
    const [dublicatePassword, setDublicatePassword] = useState(true);
    const [duration, setDuration] = useState(0);

    useEffect(() => {

    }, []);

    const validateSignIn = (un,pass) => {
        if(un===""){
            message.error("Bạn chưa nhập tên tài khoản")
            return false
        }
        if(pass===""){
            message.error("Bạn chưa nhập mật khẩu")
            return false
        }
        return true
    }

    const validateSignUp = (un,mail,pass, re) => {
        if(un===""){
            message.error("Bạn chưa nhập tên tài khoản")
            return false
        }
        if(mail===""){
            message.error("Bạn chưa nhập email")
            return false
        }
        if(pass===""){
            message.error("Bạn chưa nhập mật khẩu")
            return false
        }
        if(pass!==re){
            message.error("Mật khẩu không khớp")
            return false
        }

        return true
    }

    const signIn = () => {
        function signiIn() {
            let data =
                {
                    username: username,
                    password: password,
                }
            try {
                axios.post(`${BASE_URL}/users/signin`, data).then((response) => {
                    message.destroy()
                    message.success('Đăng nhập thành công')
                    console.log(response)

                    localStorage.setItem("token", response.data);
                    // window.location.replace(
                    //     "http://localhost:3000"
                    // );
                    setTimeout(() => {
                        let url = location.pathname.split("/")
                        history.push(url[0]);
                    }, 500)

                })
                    .catch((err) => {
                        message.destroy();
                        message.error('Đăng nhập thất bại')
                        console.log(err);

                    });

            } catch (e) {
                message.destroy();
                console.log(`Failed to fetch data: ${e.message}`, e);

            }
        }

        if(validateSignIn(username,password)){
            message.loading({ content: 'Loading...', key: "a", duration: 10000} );
            signiIn();
        }

    }

    const signUp = () => {
        function signUp() {

            let data =
                {
                    username: usernameToSingUp,
                    email: email,
                    password: passwordToSingUp,
                    roles: [
                        "ROLE_ADMIN"
                    ]
                }
            try {
                axios.post(`${BASE_URL}/users/signup`, data).then((response) => {
                    message.destroy();
                    message.success("Đăng ký tài khoản thành công")
                    setTab("1");
                    // console.log(response)
                    // debugger
                    // localStorage.setItem("token", response);
                    // window.location.replace(
                    //     "http://localhost:3000"
                    // );
                })
                    .catch((err) => {
                        message.destroy();
                        message.error("Đăng ký tài khoản thất bại")
                    });

            } catch (e) {
                message.destroy();
                console.log(`Failed to fetch data: ${e.message}`, e);

            }
        }

        if(validateSignUp(usernameToSingUp, email, passwordToSingUp, repeatPasswordToSingUp)){
            message.loading({ content: 'Loading...', key: "a", duration: 10000} );
            signUp();
        }


    }

    return (
        <>
            <div className="parent">
                <div className="main">
                    <p className="sign" align="center">COFE STOCK</p>
                    <Tabs className="my-tab" style={{margin: "20px 40px"}} activeKey={tab}
                          onTabClick={(tab)=>{
                             setTab(tab);
                          }}>
                        <TabPane tab="Sign in" key="1">
                            <form className="form1">
                                <input className="un " type="text" align="center" placeholder="Username"
                                       value={username}
                                       onChange={(e) => {
                                           setUsername(e.target.value)
                                       }}/>
                                <input className="pass" type="password" align="center" placeholder="Password"
                                       value={password} onChange={(e) => {
                                    setPassword(e.target.value)
                                }}/>
                                <a className="submit" align="center" onClick={signIn}>Sign in</a>
                                <p className="forgot" align="center"></p>
                                <a className="sign-in-with-email" align="center">Sign in with your Email</a>
                                <p className="forgot" align="center"></p>

                            </form>
                        </TabPane>
                        <TabPane tab="Sign up" key="2">
                            <form onSubmit={signUp} className="form2">
                                <input className="un " type="text" align="center" placeholder="Username"
                                       value={usernameToSingUp}
                                       onChange={(e) => {
                                           setUsernameToSingUp(e.target.value)
                                       }}/>
                                <input className="un " type="text" align="center" placeholder="Email" value={email}
                                       onChange={(e) => {
                                           setEmail(e.target.value)
                                       }}/>
                                <input className="pass" type="password" align="center" placeholder="Password"
                                       value={passwordToSingUp} onChange={(e) => {
                                    setPasswordToSingUp(e.target.value)
                                }}/>
                                <div >
                                <input  className="pass" type="password" align="center" placeholder="Repeat Password"
                                       value={repeatPasswordToSingUp}
                                        onChange={(e) => {
                                           setDublicatePassword(e.target.value===passwordToSingUp);
                                    setRepeatPasswordToSingUp(e.target.value)
                                }}/>
                                    {!dublicatePassword ? (<span className="err">Mật khẩu không khớp</span>): null}
                                </div>
                                <a className="submit" align="center" onClick={signUp}>Sign up</a>
                                <p className="forgot" align="center"></p>

                            </form>
                        </TabPane>

                    </Tabs>

                </div>


            </div>
        </>
    )
}
export default Login;
