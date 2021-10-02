import React, {useEffect, useState} from "react";
import {Row, Col, Spin, Table} from "antd";
import axiosInstance from "../../../axios";
import {Area} from "@ant-design/charts";

const Result = ({data, loading}) => {


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
        yField: "priceStock",
        seriesField: "sym",
        color: ['#82d1de', '#cb302d', '#e3ca8c'],
        areaStyle: {fillOpacity: 0.7},
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


    return (
        <>
            <Spin spinning={loading}>
                <Area  {...config1} />
                <br/>
            </Spin>

        </>
    )
}
export default Result;
