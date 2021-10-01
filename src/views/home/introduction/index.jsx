import React, {useEffect, useState} from "react";
import {Card, Col, Row} from "antd";
import "./style.css"
import axiosInstance from "../../../axios";
import {Area, Column} from '@ant-design/charts';

const Introduction = ({data}) => {

    const [dataChart, setDataChart] = useState([]);
    // const [dataColumn, setDataColumn] = useState([]);

    useEffect(() => {
        axiosInstance.get("price?symbol=FPT&fromTime=2021-01-01")
            .then((res) => {
                for (let i = 0; i < res.data.length; i++) {
                    res.data[i].volume = res.data[i].volume / 10000;
                }
                setDataChart(res.data)
            })
    }, [])

    const formatPrice = (price) => {
        return `${price / 1000}`
    }

    var config = {
        height: 180,
        data: dataChart,
        xField: 'time',
        yField: 'close',
        xAxis: {
            range: [0, 1],
            tickCount: 5,
        },
        areaStyle: function areaStyle() {
            return {fill: 'l(270) 0:#ffffff 0.5:#7ec2f3 1:#1890ff'};
        },
    };

    var configColumn = {
        height: 100,
        data: dataChart,
        xField: 'time',
        yField: 'volume',
        // label: {
        //     position: 'middle',
        //     style: {
        //         fill: '#FFFFFF',
        //         opacity: 0.6,
        //     },
        // },
        xAxis: {
            label: {
                autoHide: true,
                autoRotate: false,
            },
        },
        // meta: {
        //     type: { alias: '类别' },
        //     sales: { alias: '销售额' },
        // },
    };

    return (
        <>
            <Card title="FPT">
                <div>Cổ phiếu được giao dịch ký quỹ theo Thông báo ngày 05/07/2021 của HSX</div>
                <Row gutter={24}>
                    <Col span={6}>
                        <img style={{width: "100%", height: "auto"}} src={data.logo}/>
                    </Col>
                    <Col span={18}>
                        <div style={{textAlign: "justify"}}>{data.description}</div>
                    </Col>
                </Row>
                <Row gutter={24}>
                    <Col span={13}>
                        <Row gutter={24} style={{borderBottom: "1px solid #f0f0f0"}}>
                            <Col span={12} style={{textAlign: "center", borderRight: "1px solid #f0f0f0"}}>
                                <div className="dltlu-time">
                                    <span style={{display: "block"}}>Cập nhật lúc 15:15 </span>
                                    <span>Thứ 6, 24/09/2021</span>
                                </div>
                                <div className="price">{formatPrice(data.price)}</div>
                                <div className="dltlu-down" style={{color: "#CC0000"}}>-0.4 (-0.4%)</div>
                                <div>
                                    <div className="v1">Khối lượng</div>
                                    <div className="v2">{data?.stock_price?.length}</div>
                                </div>

                            </Col>
                            <Col span={12} style={{display: "block", borderRight: "1px solid #f0f0f0"}}>
                                <div style={{borderBottom: "1px solid #f0f0f0"}}>
                                    <div className="inline-block">
                                        <div className="l">Giá tham chiếu</div>
                                        <div
                                            style={{float: "right"}}>{formatPrice(data?.stock_price?.custom_price)}</div>
                                    </div>
                                    <div className="inline-block">
                                        <div className="l">Giá trần</div>
                                        <div style={{float: "right"}}>{formatPrice(data?.stock_price?.ceil_price)}</div>
                                    </div>
                                    <div className="inline-block">
                                        <div className="l">Giá sàn</div>
                                        <div
                                            style={{float: "right"}}>{formatPrice(data?.stock_price?.floor_price)}</div>
                                    </div>
                                    <div className="inline-block">
                                        <div className="l">Giá mở cửa</div>
                                        <div style={{float: "right"}}>{formatPrice(data?.stock_price?.open_price)}</div>
                                    </div>
                                    <div className="inline-block">
                                        <div className="l">Giá cao nhất</div>
                                        <div
                                            style={{float: "right"}}>{formatPrice(data?.stock_price?.height_price)}</div>
                                    </div>
                                    <div className="inline-block">
                                        <div className="l">Giá thấp nhất</div>
                                        <div style={{float: "right"}}>{formatPrice(data?.stock_price?.low_price)}</div>
                                    </div>
                                </div>
                                <div>
                                    <div className="inline-block">
                                        <div className="l">GD ròng NĐTNN</div>
                                        <div style={{float: "right"}}>{formatPrice(data?.stock_price?.low_price)}</div>
                                    </div>
                                    <div className="inline-block">
                                        <div className="l">Room NN còn lại</div>
                                        <div style={{float: "right"}}>{formatPrice(data?.stock_price?.low_price)}</div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <div style={{display: "block", width: "100%", marginTop:10 }}>
                                <div className="inline-block">
                                    <div className="l">EPS cơ bản (nghìn đồng):</div>
                                    <div style={{float: "right"}}>{formatPrice(data?.stock_price?.low_price)}</div>
                                </div>
                                <div className="inline-block">
                                    <div className="l"> EPS pha loãng (nghìn đồng):</div>
                                    <div style={{float: "right"}}>{formatPrice(data?.stock_price?.low_price)}</div>
                                </div>
                                <div className="inline-block">
                                    <div className="l">  P/E :</div>
                                    <div style={{float: "right"}}>{formatPrice(data?.stock_price?.low_price)}</div>
                                </div>
                                <div className="inline-block">
                                    <div className="l">   Giá trị sổ sách /cp (nghìn đồng):</div>
                                    <div style={{float: "right"}}>{formatPrice(data?.stock_price?.low_price)}</div>
                                </div>
                                <div className="inline-block">
                                    <div className="l">   Hệ số beta:</div>
                                    <div style={{float: "right"}}>{formatPrice(data?.stock_price?.low_price)}</div>
                                </div>
                                <div className="inline-block">
                                    <div className="l">  KLGD khớp lệnh trung bình 10 phiên:</div>
                                    <div style={{float: "right"}}>{formatPrice(data?.stock_price?.low_price)}</div>
                                </div>
                                <div className="inline-block">
                                    <div className="l">  KLCP đang niêm yết:</div>
                                    <div style={{float: "right"}}>{formatPrice(data?.stock_price?.low_price)}</div>
                                </div>
                                <div className="inline-block">
                                    <div className="l">  KLCP đang lưu hành:</div>
                                    <div style={{float: "right"}}>{formatPrice(data?.stock_price?.low_price)}</div>
                                </div>
                                <div className="inline-block">
                                    <div className="l">  Vốn hóa thị trường (tỷ đồng):</div>
                                    <div style={{float: "right"}}>{formatPrice(data?.stock_price?.low_price)}</div>
                                </div>
                            </div>
                        </Row>
                    </Col>

                    <Col span={11}>
                        <div style={{marginBottom: "15px"}}><Area {...config} /></div>
                        <div style={{marginBottom: "5px"}}><Column {...configColumn} /></div>
                        <div className="inline-block">
                            <div style={{float: "left"}}>Đồ thị vẽ giá điều chỉnh</div>
                            <div style={{float: "right"}}>đv KLg: 10,000cp</div>
                        </div>
                        <div>Ngày giao dịch đầu tiên: 13/12/2006</div>
                        <div> Giá đóng cửa phiên GD đầu tiên(nghìn đồng): 400.0</div>
                        <div> Khối lượng cổ phiếu niêm yết lần đầu: 60,810,230</div>

                    </Col>
                </Row>
            </Card>
        </>
    )
}
export default Introduction
