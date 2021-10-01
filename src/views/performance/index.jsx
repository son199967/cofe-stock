import React, {useEffect, useState} from "react";
import Search from "./search";
import Result from "./result";
import "../../containers/style.css"
import axiosInstance from "../../axios";

const Performance = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [dataGrossReturn, setDataGrossReturn] = useState([]);



    useEffect(() => {
        onSearch(null)
    },[])

    const fetch = () => {
        setLoading(true)
        axiosInstance.get("/price/calculate?fromTime=2020-06-01&symbol=FPT&symbol=VCB&symbol=BID&day=30")
            .then((res) => {
                console.log(data);
                setData(res.data)
                setDataGrossReturn(res.data.filter((item) => {
                    if(item.sym==="FPT"){
                        return item
                    }
                }))

                setLoading(false)
            })
            .catch((err) => {
                console.log(err)

            })
    }

    const onSearch = (value) => {
        let url = "/price/calculate?fromTime=2020-06-01&day=30&money=100000&risk=0.2&reDay=4"

        setLoading(true);
        if (value) {
            if (value.sym.length > 0) {
                for (let item of value.sym) {
                    url = url.concat(`&symbol=${item}`)
                }
            } else {
                url = url.concat(`&symbol=FPT`)
            }
            console.log(url)
        } else {
            url = "/price/calculate?fromTime=2020-06-01&symbol=FPT&day=30&money=100000&risk=0.2&reDay=4"
        }

        axiosInstance
            .get(url)
            .then((res) => {

                setData(res.data)
                setLoading(false)
            })
    }

    return (
        <>
            <div className="container">
                <Search
                onSearch={onSearch}
                ></Search>
                <Result
                data={data}
                dataGrossReturn={dataGrossReturn}
                loading={loading}
                ></Result>
            </div>

        </>
    )
}

export default Performance;
