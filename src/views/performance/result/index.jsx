import React, {useEffect, useState} from "react";
import {Row, Col, Spin} from "antd";
import axiosInstance from "../../../axios";
import {Line } from "@ant-design/charts";
import "./style.css"

const Result = ({data,dataGrossReturn,loading}) => {


    var config = {
        height: 600,
        data: data,
        xField: "time",
        yField: "close",
        seriesField: "sym",
        areaStyle: function areaStyle() {
            return {fill: "#ffffff"};
        },
        color: [
            "#de2727",
            "#2b738c",
            "#6853bf",
            "#6897a7",
            "#6897a7",
            "#6897a7",
            "#6897a7"
        ],
        xAxis: {
            type: "time",
            mask: "MM/YYYY"
        },

        legend: {position: "top"}
    };

    var config1 = {
        height: 600,
        data: data,
        xField: "time",
        yField: "cumulativeLog",
        seriesField: "sym",
        areaStyle: function areaStyle() {
            return {fill: "#ffffff"};
        },
        color: [
            "#de2727",
            "#2b738c",
            "#6853bf",
            "#6897a7",
            "#6897a7",
            "#6897a7",
            "#6897a7"
        ],
        xAxis: {
            type: "time",
            mask: "MM/YYYY"
        },
        // yAxis: {
        //     label: {
        //         formatter: function formatter(v) {
        //             return "".concat(v).replace(/\d{1,3}(?=(\d{3})+$)/g, function (s) {
        //                 return "".concat(s, ",");
        //             });
        //         }
        //     }
        // },
        legend: {position: "top"}
    };

    const configGrossReturn = {
        height: 600,
        data: dataGrossReturn,
        xField: "time",
        yField: "grossReturn",
        yAxis: {
            min:70,
            max:130
        },
        xAxis: {
            type: "time",
            mask: "DD/MM/YYYY"
        },

    }

    const configSimpleReturn = {
        height: 600,
        data: dataGrossReturn,
        xField: "time",
        yField: "simpleReturn",
        yAxis: {
            min:-30,
            max:30
        },
        xAxis: {
            type: "time",
            mask: "DD/MM/YYYY"
        },

    }



    return (
        <>
            <Spin spinning={loading}>
                <Row gutter={24}>
                    <Col span={12}>
                        <h3 className="center">Close price</h3>
                        <Line  {...config} />
                    </Col>

                    <Col span={12}>

                        <h3 className="center">Cumulative LOG Gross Returns</h3>
                        <Line  {...config1} />
                    </Col>


                </Row>
                <br/>
                <br/>
                <Row gutter={24}>
                    <Col span={12}>
                        <h3 className="center">Gross Return</h3>
                        <Line {...configGrossReturn}/>
                    </Col>
                    <Col span={12}>
                        <h3 className="center">Simple Return</h3>
                        <Line {...configSimpleReturn}/>
                    </Col>
                </Row>

            </Spin>

        </>
    )
}
export default Result;
