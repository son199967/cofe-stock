import React, {useEffect, useState} from "react";
import "./../../containers/style.css"
import Search from "./search";
import Result from "./result";
import {Col, Row, Table} from "antd";
import axiosInstance from "../../axios";
// import Table from "./table";

const BackTest = () => {
    const [data, setData] = useState([])
    const [dataTable, setDataTable] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        onSearch(null)
    }, [])

    const onSearch = (value) => {
        setLoading(true)
        let url = "";
        if (value) {
            url = `/price/loadtest?fromTime=2016-01-01&symbol=FPT&day=${value.day}&money=${value.money}&risk=${value.risk}&reDay=${value.reDay}`

        } else {
            url = "/price/loadtest?fromTime=2016-01-01&symbol=FPT&day=30&money=100000&risk=0.2&reDay=4"
        }
        axiosInstance
            .get(url)
            .then((res) => {
                let FPT = res.data.filter((item) => {
                    if (item.sym === "FPT") {
                        return item
                    }
                }).slice(30)

                console.log(FPT, "FPT")

                let CASH = res.data.filter((item) => {
                    if (item.sym === "CASH") {
                        return item
                    }
                }).slice(30)


                console.log(CASH, "CASH")
                setData([...FPT, ...CASH])
                setDataTable(FPT)
                setLoading(false)

            })
    }

    const columns = [
        {
            title: 'Time',
            dataIndex: 'time',
            key: 'time',
            // render: text => <a>{text}</a>,
        },
        {
            title: "SYM",
            dataIndex: 'sym',
            key: 'sym',
        },
        {
            title: 'grossReturn',
            dataIndex: 'grossReturn',
            key: 'grossReturn',
        },
        {
            title: 'simpleReturn',
            dataIndex: 'simpleReturn',
            key: 'simpleReturn',
            // render: text => <a>{text}</a>,
        },
        {
            title: 'logReturn',
            dataIndex: 'logReturn',
            key: 'logReturn',
        },
        {
            title: 'volatility',
            dataIndex: 'volatility',
            key: 'volatility',
        },
        {
            title: 'cumulativeLog',
            dataIndex: 'cumulativeLog',
            key: 'cumulativeLog',
            // render: text => <a>{text}</a>,
        },
        {
            title: 'targetWeights',
            dataIndex: 'targetWeights',
            key: 'targetWeights',
        },
        {
            title: 'annualisedStandardDeviation',
            dataIndex: 'annualisedStandardDeviation',
            key: 'annualisedStandardDeviation',
        },
        {
            title: 'constrainedWeightsLeverage',
            dataIndex: 'constrainedWeightsLeverage',
            key: 'constrainedWeightsLeverage',
        },
        {
            title: 'numberOfSharesWithEquity',
            dataIndex: 'numberOfSharesWithEquity',
            key: 'numberOfSharesWithEquity',
        },
        {
            title: 'cash',
            dataIndex: 'cash',
            key: 'cash',
        },
        {
            title: 'numberStock',
            dataIndex: 'numberStock',
            key: 'numberStock',
        },
        {
            title: 'money',
            dataIndex: 'money',
            key: 'money',
        },
        {
            title: 'priceStock',
            dataIndex: 'priceStock',
            key: 'priceStock',
        },


    ]


    return (
        <>
            <div className="container">
                <Row gutter={24}>
                    <Col span={8}>
                        <Search onSearch={onSearch}></Search>
                    </Col>
                    <Col span={16}>
                        <Result
                            data={data}
                            loading={loading}

                        ></Result>
                    </Col>
                </Row>
                <Row gutter={24}>
                    <Col
                        span={24}
                    >
                        {/*{dataTable.length>0?*/}
                        {/*    (   <Table1*/}
                        {/*        dataTable={dataTable}*/}
                        {/*    ></Table1>)*/}
                        {/*: null}*/}


                        <Table
                            columns={columns}
                            dataSource={dataTable}></Table>


                    </Col>

                </Row>


            </div>

        </>
    )
}
export default BackTest;
