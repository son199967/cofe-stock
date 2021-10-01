import React, {useState} from "react";
import {Input, AutoComplete} from 'antd';
import {SelectProps} from 'antd/es/select';

const Search = () => {

    const mockVal = (str: string, repeat: number = 1) => ({
        value: str.repeat(repeat),
    });

    const [value, setValue] = useState('');
    const [options, setOptions] = useState([]);
    const onSearch = (searchText: string) => {
        setOptions(
            !searchText ? [] : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)],
        );
    };
    const onSelect = (data: string) => {
        console.log('onSelect', data);
    };
    const onChange = (data: string) => {
        setValue(data);
    };


    return (
        <>
            <AutoComplete
                options={options}
                style={{width: 200}}
                onSelect={onSelect}
                onSearch={onSearch}
                placeholder="input here"
            />
        </>
    )
};
export default Search
