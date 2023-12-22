import { useEffect, useState, useRef } from "react";
import DisplayData from "./displayData";

export default function Home(props) {
    const [productData,setProductData] = useState([]);
    const [tableCols,setTableCols] = useState([]);
    const [dataLoading,setDataLoading] = useState(true);

    const API_URL = "https://s3.amazonaws.com/open-to-cors/assignment.json";

    useEffect(() => {
        fetch(API_URL).then((res) => {
            return res.json();
        }).then((data) => {
            setTableCols(Object.keys(data.products["12"]));
            setProductData(orderDataDesByPopularity(Object.values(data.products)));
            setDataLoading(false);
        }).catch((err) => {
            console.log(err);
        })
    },[])


    const compareByPopularity = (product1, product2) => {
        return product2["popularity"]-product1["popularity"];
    }

    const orderDataDesByPopularity = (data) => {
        return data.sort(compareByPopularity);
    }

    return (
        <div>
            {dataLoading ? 

                <div>
                    Data is being retrieved...
                </div>

                :

                <DisplayData productData={productData} tableCols={tableCols}/>

                
            }
        </div>
    )
}