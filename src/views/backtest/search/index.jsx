import React, {useEffect, useState} from "react";
import {Button, Form, Select, Slider} from "antd";
import "./style.css"

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
                        <div >
                            <Slider
                                value={initialEquity}
                                min={10000}
                                max={1000000}
                                step={1000}
                                tooltipVisible
                                // getTooltipPopupContainer={(value => {
                                //     return(<div style={{backgroundColor :"red"}}>{value}</div>)
                                // })}
                                onChange={(value => setInitialEquity(value))}/>

                        </div>

                    </Form.Item>

                    <Form.Item
                        label="perShareCommission"
                    >
                        <div>
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
                        <div>
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
                        <div >
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
                        <div >
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
                        <div >
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
                        <div >
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
