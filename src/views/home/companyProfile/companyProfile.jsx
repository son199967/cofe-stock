import React, {useEffect, useState} from "react";
import {Card, Tabs} from "antd";

const {TabPane} = Tabs;

const CompanyProfile = ({data}) => {
    // const [value, setValue] = useState([]);

    const [dataTable1, setDataTable1] = useState({});
    const [dataTable2, setDataTable2] = useState({});

    const [time, setTime] = useState([""]);
    const [step1, setStep1] = useState([""]);
    const [step2, setStep2] = useState([""]);
    const [step3, setStep3] = useState([""]);
    const [step4, setStep4] = useState([""]);
    const [step5, setStep5] = useState([""]);
    const [step6, setStep6] = useState([""]);

    const [year, setYear] = useState([]);
    const [eps, setEps] = useState([]);
    const [bv, setBv] = useState([]);
    const [pe, setPe] = useState([]);
    const [roa, setRoa] = useState([]);
    const [roe, setRoe] = useState([]);
    const [ros, setRos] = useState([]);
    const [gos, setGos] = useState([]);
    const [dar, setDar] = useState([]);

    const [index1, setIndex1] = useState(0)
    const [index2, setIndex2] = useState(0)

    useEffect(() => {
        if (data) {
            let tm = [], s1 = [], s2 = [], s3 = [], s4 = [], s5 = [], s6 = [];
            let _year = [], _eps = [], _bv = [], _pe = [], _roa = [], _roe = [], _ros = [], _gos = [], _dar = [];

            data?.stock_info?.stockReports.map((element) => {
                    if (tm.length === 0) {
                        tm = [`${element.precious}/${element.year}`]
                    } else if (!tm.includes(`${element.precious}/${element.year}`)) {
                        tm = [...tm, ...[`${element.precious}/${element.year}`]]
                    }

                    if (element.step === 1) {
                        s1 = [...s1, ...[`${element.value}`]];
                    }
                    if (element.step === 2) {
                        s2 = [...s2, ...[`${element.value}`]];
                    }
                    if (element.step === 3) {
                        s3 = [...s3, ...[`${element.value}`]];
                    }
                    if (element.step === 4) {
                        s4 = [...s4, ...[`${element.value}`]];
                    }
                    if (element.step === 5) {
                        s5 = [...s5, ...[`${element.value}`]];
                    }
                    if (element.step === 6) {
                        s6 = [...s6, ...[`${element.value}`]];
                    }
                    setTime(tm);
                    setStep1(s1);
                    setStep2(s2);
                    setStep3(s3);
                    setStep4(s4);
                    setStep5(s5);
                    setStep6(s6);
                }
            )

            data?.stock_info?.indicators.map((element) => {
                    _year = [..._year, ...[element.year]];
                    _eps = [..._eps, ...[element.eps]];
                    _bv = [..._bv, ...[element.bv]];
                    _pe = [..._pe, ...[element.pe]];
                    _roa = [..._roa, ...[element.roa]];
                    _roe = [..._roe, ...[element.roe]];
                    _ros = [..._ros, ...[element.ros]];
                    _gos = [..._gos, ...[element.gos]];
                    _dar = [..._dar, ...[element.dar]];

                    setYear(_year);
                    setEps(_eps);
                    setBv(_bv);
                    setPe(_pe);
                    setRoa(_roa);
                    setRoe(_roe);
                    setRos(_ros);
                    setGos(_gos);
                    setDar(_dar);
                }
            )
        }

    }, [data])

    useEffect(() => {
        console.log(time, "time")
        console.log(step1, "step1")
        console.log(step2, "step2")
        console.log(step3, "step3")
        console.log(step4, "step4")
        console.log(step5, "step5")
        console.log(step6, "step6")
        console.log(year, "year")
        console.log(eps, "eps")
        console.log(bv, "bv")
        console.log(pe, "pe")
        console.log(roa, "roa")
        console.log(roe, "roe")
        console.log(ros, "ros")
        console.log(gos, "gos")
        console.log(dar, "dar")
    }, [step1, time, step2, step3, step4, step5, step6, data, year, eps, bv, pe, roa, roe, ros, gos, dar])


    useEffect(() => {
        setIndex1(time.length - 1);
        fetch1(step1.length - 1);
        setIndex2(year.length - 1);
        fetch2(year.length - 1)

    }, [step1, time, step2, step3, step4, step5, step6, data, year, eps, bv, pe, roa, roe, ros, gos, dar])

    const fetch1 = (i) => {
        debugger
        if (i >= 3 && i < step1.length) {
            console.log(i, "index")
            let data = {
                time: time.filter((item, index) => {
                    if (index <= i && index > i - 4) {
                        return item
                    }
                }),
                step1: step1.filter((item, index) => {
                    if (index <= i && index > i - 4) {
                        return item
                    }
                }),
                step2: step2.filter((item, index) => {
                    if (index <= i && index > i - 4) {
                        return item
                    }
                }),
                step3: step3.filter((item, index) => {
                    if (index <= i && index > i - 4) {
                        return item
                    }
                }),
                step4: step4.filter((item, index) => {
                    if (index <= i && index > i - 4) {
                        return item
                    }
                }),
                step5: step5.filter((item, index) => {
                    if (index <= i && index > i - 4) {
                        return item
                    }
                }),
                step6: step6.filter((item, index) => {
                    if (index <= i && index > i - 4) {
                        return item
                    }
                }),
            }
            console.log(data, "data")
            setDataTable1(data);
        }
    }

    const fetch2 = (i) => {
        debugger
        if (i >= 3 && i < step1.length) {
            console.log(i, "index")
            let data = {
                year: year.filter((item, index) => {
                    if (index <= i && index > i - 4) {
                        return item
                    }
                }),
                eps: eps.filter((item, index) => {
                    if (index <= i && index > i - 4) {
                        return item
                    }
                }),
                bv: bv.filter((item, index) => {
                    if (index <= i && index > i - 4) {
                        return item
                    }
                }),
                pe: pe.filter((item, index) => {
                    if (index <= i && index > i - 4) {
                        return item
                    }
                }),
                roa: roa.filter((item, index) => {
                    if (index <= i && index > i - 4) {
                        return item
                    }
                }),
                roe: roe.filter((item, index) => {
                    if (index <= i && index > i - 4) {
                        return item
                    }
                }),
                ros: ros.filter((item, index) => {
                    if (index <= i && index > i - 4) {
                        return item
                    }
                }),
                gos: gos.filter((item, index) => {
                    if (index <= i && index > i - 4) {
                        return item
                    }
                }),
                dar: dar.filter((item, index) => {
                    if (index <= i && index > i - 4) {
                        return item
                    }
                }),
            }
            console.log(data, "data")
            setDataTable2(data);
        }
    }

    const before1 = () => {
        if (index1 >= 4) {

            fetch1(index1 - 1);
            setIndex1(index1 - 1);
        }
    }

    const affer1 = () => {
        if (index1 < time.length - 1) {
            fetch1(index1 + 1);
            setIndex1(index1 + 1);
        }
    }

    const before2 = () => {
        if (index2 >= 4) {

            fetch2(index2 - 1);
            setIndex2(index2 - 1);
        }
    }

    const affer2 = () => {
        if (index2 < year.length - 1) {
            fetch2(index2 + 1);
            setIndex2(index2 + 1);
        }
    }

    return (
        <>
            <Card title="Hồ sơ công ty">
                <Tabs>
                    <TabPane tab="Thông tin tài chính" key="1">
                        <button onClick={before1}>Trước</button>
                        <button onClick={affer1}>Sau</button>
                        <table width="100%">

                            <tr>
                                <th width="40%" style={{float: "left"}}>Thời gian</th>
                                {dataTable1?.time?.map((item) => (<th width="15%">{item}</th>))}
                            </tr>
                            <tr>
                                <th width="40%" style={{float: "left"}}>Doanh thu bán hàng và CCDV</th>
                                {dataTable1?.step1?.map((item) => (<th width="15%">{item}</th>))}
                            </tr>
                            <tr>
                                <th width="40%" style={{float: "left"}}>Giá vốn hàng bán</th>
                                {dataTable1?.step2?.map((item) => (<th width="15%">{item}</th>))}
                            </tr>
                            <tr>
                                <th width="40%" style={{float: "left"}}>Lợi nhuận gộp về BH và CCDV</th>
                                {dataTable1?.step3?.map((item) => (<th width="15%">{item}</th>))}
                            </tr>
                            <tr>
                                <th width="40%" style={{float: "left"}}>Lợi nhuận tài chính</th>
                                {dataTable1?.step4?.map((item) => (<th width="15%">{item}</th>))}
                            </tr>
                            <tr>
                                <th width="40%" style={{float: "left"}}>Lợi nhuận khác</th>
                                {dataTable1?.step5?.map((item) => (<th width="15%">{item}</th>))}
                            </tr>
                            <tr>
                                <th width="40%" style={{float: "left"}}>Tổng lợi nhuận trước thuế</th>
                                {dataTable1?.step6?.map((item) => (<th width="15%">{item}</th>))}
                            </tr>
                        </table>

                        <br/>
                        <br/>

                        <button onClick={before2}>Trước</button>
                        <button onClick={affer2}>Sau</button>
                        <table width="100%">

                            <tr>
                                <th width="40%" style={{float: "left"}}>
                                    Thời gian
                                </th>
                                {dataTable2?.year?.map((item) => (<th width="15%">{item}</th>))}
                            </tr>
                            <tr>
                                <th width="40%" style={{float: "left"}}>EPS</th>
                                {dataTable2?.eps?.map((item) => (<th width="15%">{item}</th>))}
                            </tr>
                            <tr>
                                <th width="40%" style={{float: "left"}}>BV</th>
                                {dataTable2?.bv?.map((item) => (<th width="15%">{item}</th>))}
                            </tr>
                            <tr>
                                <th width="40%" style={{float: "left"}}>PE</th>
                                {dataTable2?.pe?.map((item) => (<th width="15%">{item}</th>))}
                            </tr>
                            <tr>
                                <th width="40%" style={{float: "left"}}>ROA</th>
                                {dataTable2?.roa?.map((item) => (<th width="15%">{item}</th>))}
                            </tr>
                            <tr>
                                <th width="40%" style={{float: "left"}}>ROE</th>
                                {dataTable2?.roe?.map((item) => (<th width="15%">{item}</th>))}
                            </tr>
                            <tr>
                                <th width="40%" style={{float: "left"}}>ROS</th>
                                {dataTable2?.ros?.map((item) => (<th width="15%">{item}</th>))}
                            </tr>
                            <tr>
                                <th width="40%" style={{float: "left"}}>GOS</th>
                                {dataTable2?.gos?.map((item) => (<th width="15%">{item}</th>))}
                            </tr>
                            <tr>
                                <th width="40%" style={{float: "left"}}>DAR</th>
                                {dataTable2?.dar?.map((item) => (<th width="15%">{item}</th>))}
                            </tr>
                        </table>

                    </TabPane>
                    <TabPane tab="Thông tin cơ bản" key="2">

                    </TabPane>
                    <TabPane tab="Ban lãnh đạo và sở hữu" key="3">

                    </TabPane>
                    <TabPane tab="Cty con & liên kết" key="4">

                    </TabPane>
                    <TabPane tab="Tải BCTC" key="5">

                    </TabPane>

                </Tabs>
            </Card>

        </>
    )
}

export default CompanyProfile
