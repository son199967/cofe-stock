import React, {useEffect, useState} from "react";
import {Row, Col, Select, Form, Slider, Button} from "antd";

const {Option} = Select;

const Search = ({onSearch}) => {
    const [sym, setSym] = useState(["FPT"])
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
        onSearch({
            sym: sym
        })
    }

    return (
        <>
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

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Search
                    </Button>
                </Form.Item>

            </Form>

        </>
    )
}
export default Search;
