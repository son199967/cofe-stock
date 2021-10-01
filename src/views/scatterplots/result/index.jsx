import React, {useEffect, useState} from "react";
import {Line} from "@ant-design/charts";
import {Spin} from "antd";
import axiosInstance from "../../../axios";


const Result = ({data,loading}) => {


    const config = {
        height: 600,
        data: data,
        xField: "time",
        yField: "volatility",
        seriesField: "sym",

    }

    return (
        <>
            <Spin spinning={loading}>
                <Line {...config}></Line>
            </Spin>

        </>
    )
}

export default Result;
