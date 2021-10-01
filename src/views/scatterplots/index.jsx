import React, {useEffect, useState} from "react";
import "../../containers/style.css"
import Search from "./search";
import Result from "./result";
import {Row, Col} from "antd";
import axiosInstance from "../../axios";

const Scatterplots = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true)
    let url = `/price/calculate?fromTime=2020-01-01&money=100000&risk=0.12`;

    useEffect(() => {
        onSearch(null)
    }, [])

    const onSearch = (value) => {
        setLoading(true);
        if (value) {
            url = url.concat(value.day ? `&day=${value.day}` : "&day=")
            if (value.sym.length > 0) {
                for (let item of value.sym) {
                    url = url.concat(`&symbol=${item}`)
                }
            } else {
                url = url.concat(`&symbol=FPT`)
            }
        } else {
            url = "/price/calculate?fromTime=2020-01-01&symbol=FPT&day=100&money=100000&risk=0.12"
        }

        axiosInstance
            .get(url)
            .then((res) => {
                debugger
                setData(res.data)
                setLoading(false)
            })
    }

    return (<>
        <div className="container">
            <Row gutter={24}>
                <Col span={8}>
                    <Search
                        onSearch={onSearch}
                    ></Search>
                </Col>
                <Col span={16}>
                    <Result
                        data={data}
                        loading={loading}
                    ></Result>
                </Col>
            </Row>


        </div>

    </>)
}

export default Scatterplots;
