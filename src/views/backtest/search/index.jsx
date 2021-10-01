import React, {useEffect, useState} from "react";
import {Button, Form, Select, Slider} from "antd";

const Search = ({onSearch}) => {

    // const [day, setDay] = useState(30);
    const [initialEquity, setInitialEquity] = useState(100000)
    const [perShareCommission, setPerShareCommission] = useState(0.003)
    const [minimumCommissionPerOrder, setMinimumCommissionPerOrder] = useState(100)
    const [targetAssetVolatility, setTargetAssetVolatility] = useState(10)
    const [volatilityEstimationWindow, setVolatilityEstimationWindow] = useState(30)
    const [rebalanceFrequency, setRebalanceFrequency] = useState(1);
    const [frequencyToCapitaliseProfits, setFrequencyToCapitaliseProfits] = useState(1)


    const onFinish = () => {

        onSearch({
            day: volatilityEstimationWindow,
            money: initialEquity,
            risk: targetAssetVolatility/100,
            reDay: rebalanceFrequency
        })


    }

    return (
        <>
            <div>
                <Form
                    onFinish={onFinish}
                    layout="vertical"
                >
                    <Form.Item
                        label="Initial Equity"
                    >
                        <div style={{marginTop: 40}}>
                            <Slider
                                value={initialEquity}
                                min={10000}
                                max={1000000}
                                step={1000}
                                tooltipVisible
                                onChange={(value => setInitialEquity(value))}/>
                        </div>

                    </Form.Item>

                    <Form.Item
                        label="perShareCommission"
                    >
                        <div style={{marginTop: 40}}>
                            <Slider
                                value={perShareCommission}
                                tooltipVisible
                                min={0.001}
                                max={0.005}
                                step={0.001}
                                onChange={(value => setPerShareCommission(value))}/>
                        </div>

                    </Form.Item>
                    <Form.Item
                        label="minimumCommissionPerOrder"
                    >
                        <div style={{marginTop: 40}}>
                            <Slider
                                value={minimumCommissionPerOrder}
                                tooltipVisible
                                min={10}
                                max={2000}
                                step={10}
                                onChange={(value => setMinimumCommissionPerOrder(value))}/>
                        </div>

                    </Form.Item>
                    <Form.Item
                        label="targetAssetVolatility"
                    >
                        <div style={{marginTop: 40}}>
                            <Slider
                                value={targetAssetVolatility}
                                tooltipVisible
                                min={1}
                                max={50}
                                step={1}
                                onChange={(value => setTargetAssetVolatility(value))}/>
                        </div>

                    </Form.Item>
                    <Form.Item
                        label="volatilityEstimationWindow"
                    >
                        <div style={{marginTop: 40}}>
                            <Slider
                                value={volatilityEstimationWindow}
                                tooltipVisible
                                min={5}
                                max={120}
                                step={5}
                                onChange={(value => setVolatilityEstimationWindow(value))}/>
                        </div>

                    </Form.Item>

                    <Form.Item
                        label="rebalanceFrequency"
                    >
                        <div style={{marginTop: 40}}>
                            <Slider
                                value={rebalanceFrequency}
                                tooltipVisible
                                min={1}
                                max={12}
                                step={1}
                                onChange={(value => setRebalanceFrequency(value))}/>
                        </div>

                    </Form.Item>

                    <Form.Item
                        label="frequencyToCapitaliseProfits"
                    >
                        <div style={{marginTop: 40}}>
                            <Slider
                                value={frequencyToCapitaliseProfits}
                                tooltipVisible
                                min={1}
                                max={12}
                                step={1}
                                onChange={(value => setFrequencyToCapitaliseProfits(value))}/>
                        </div>

                    </Form.Item>

                    <Form.Item wrapperCol={{offset: 8, span: 16}}>
                        <Button type="primary" htmlType="submit">
                            UPDATE BACKTEST
                        </Button>
                    </Form.Item>

                </Form>

            </div>


        </>
    )
}

export default Search;
