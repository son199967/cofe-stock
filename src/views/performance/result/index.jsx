import React, {useEffect, useState} from "react";
import {Row, Col, Spin} from "antd";
import axiosInstance from "../../../axios";
import {Line } from "@ant-design/charts";

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
            min:90,
            max:110
        }

    }

    const configSimpleReturn = {
        height: 600,
        data: dataGrossReturn,
        xField: "time",
        yField: "simpleReturn",
        yAxis: {
            min:-10,
            max:10
        }

    }



    return (
        <>
            <Spin spinning={loading}>
                <Row gutter={24}>
                    <Col span={12}>
                        <h6>CLose price</h6>
                        <Line  {...config} />
                    </Col>

                    <Col span={12}>

                        <h6>Cumulative LOG Gross Returns</h6>
                        <Line  {...config1} />
                    </Col>


                </Row>
                <Row gutter={24}>
                    <Col span={12}>
                        <h6>Gross Return</h6>
                        <Line {...configGrossReturn}/>
                    </Col>
                    <Col span={12}>
                        <h6>Simple Return</h6>
                        <Line {...configSimpleReturn}/>
                    </Col>
                </Row>

            </Spin>

        </>
    )
}
export default Result;
