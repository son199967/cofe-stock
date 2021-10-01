import React, {useEffect, useState} from "react";
import "./style.less";
import axiosInstance from "../../axios";
import {Tabs, Row, Col} from 'antd';
import 'antd/dist/antd.css';
import "./../../containers/style.css"
import Introduction from "./introduction";
import Search from "./search/search";
import CompanyProfile from "./companyProfile/companyProfile";

const {TabPane} = Tabs;

const Home = (props) => {
    const [data, setData] = useState({});

    const logout = () => {
        localStorage.removeItem("token");
        window.location.replace(
            "http://localhost:3000/login"
        );
    }

    useEffect(() => {
        axiosInstance.get("/stock/7").then((res) => {

            setData(res.data);
            console.log(res.data.id)

        })
    },[])

    return (
        <>
            {data!=={}? ( <div>
                <div className="container">
                    <Row gutter={24}>
                        <Col span={18}>
                            <Introduction data={data}></Introduction>
                            <CompanyProfile data={data}></CompanyProfile>
                        </Col>
                        <Col span={6}>
                            <Search/>
                        </Col>
                    </Row>
                </div>

            </div>) : null}

        </>
    );
}

export default Home;
