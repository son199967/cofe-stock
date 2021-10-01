import React, {useEffect, useState} from "react";
import "./../../containers/style.css"
import Search from "./search";
import Result from "./result";
import {Col, Row} from "antd";
import axiosInstance from "../../axios";

const BackTest = () => {
    const [data, setData] = useState([])

    useEffect(()=>{
        onSearch(null)
    },[])

    const onSearch = (value) => {

        if(value){
            console.log(value)
            axiosInstance
                .get(`/price/loadtest?fromTime=2016-01-01&symbol=FPT&day=${value.day}&money=${value.money}&risk=${value.risk}&reDay=${value.reDay}`)
                .then((res) => {
                    setData(res.data)
                    debugger
                })
        }
        else {
            axiosInstance
                .get("/price/loadtest?fromTime=2016-01-01&symbol=FPT&day=30&money=100000&risk=0.2&reDay=4")
                .then((res) => {
                    setData(res.data)
                    debugger
                })
        }
    }


    return(
        <>
            <div className="container">
                <Row gutter={24}>
                    <Col span={8}>
                        <Search onSearch={onSearch}></Search>
                    </Col>
                    <Col span={16}>
                        <Result
                        data={data}
                        ></Result>
                    </Col>
                </Row>



            </div>

        </>
    )
}
export default BackTest;