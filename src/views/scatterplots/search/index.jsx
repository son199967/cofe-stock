import React, {useEffect, useState} from "react";
import {Button, Form, Select, Slider} from "antd";

const Search = ({onSearch}) => {
    const [sym, setSym] = useState(["FPT"])
    const [day, setDay] = useState(30);

    const [options, setOptions] = useState([]);

    useEffect(() => {
        setOptions([
            {
                label: "FPT",
                value: "FPT"
            },
            {
                label: "VCB",
                value: "VCB"
            },
            {
                label: "BID",
                value: "BID"
            },
        ])
    }, [])


    const onFinish = () => {
        // setValue({
        //     sym: sym,
        //     day: day
        // })
        onSearch({
                sym: sym,
                day: day
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
                        label="Select Assets"
                    >
                        <Select
                            mode="multiple"
                            style={{width: '100%'}}
                            // placeholder="select one country"
                            defaultValue={['FPT']}
                            onChange={(value => setSym(value))}
                            optionLabelProp="label"
                            options={options}
                            value={sym}
                        >

                        </Select>
                    </Form.Item>
                    <Form.Item
                        label="Select Estimation Window Length"
                    >
                        <div style={{marginTop: 40}}>
                            <Slider value={day} tooltipVisible onChange={(value => setDay(value))}/>
                        </div>

                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                            Search
                        </Button>
                    </Form.Item>

                </Form>

            </div>



        </>
    )
}

export default Search;
