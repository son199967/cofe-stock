import React from "react";
import {Spin} from "antd";
import {Table} from "antd";

const Table1 = ( {dataTable}) => {

    const columns = [
        {
            title: 'Time',
            dataIndex: 'time',
            key: 'time',
            // render: text => <a>{text}</a>,
        },
        {
            title: 'Mã',
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

    return
    (
        <>
            <Table
                columns={columns}
                dataSource={dataTable}></Table>
        </>
    )

}

export default Table1;
