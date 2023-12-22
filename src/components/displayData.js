import { useState } from "react";
import "../styles/displaydata.css";

export default function DisplayData({ productData, tableCols }) {
    console.log(tableCols);
    return (
        <div className="table-container">
            <table className="product-table">
                <thead className="heading-container">
                    {
                        tableCols.map((col) => {
                            switch(col) {
                                case 'subcategory':
                                    return <td className="heading" style={{width:"20%",fontSize: "20px"}}>Sub-Category</td>
                                case 'title':
                                    return <td className="heading" style={{width: "50%",fontSize: "20px"}}>Title</td>
                                case 'price':
                                    return <td className="heading" style={{width: "15%",fontSize: "20px"}}>Price</td>
                                case 'popularity':
                                    return <td className="heading" style={{width: "15%",fontSize: "20px"}}>Popularity</td>
                            }
                        })
                    }
                </thead>
                <tbody className="table-rows">
                    {productData.map((product) => (
                        <tr className="product-container">
                            <td style={{width:"20%",borderRight: "1.5px solid black",borderLeft: "1.5px solid black"}}>{product[tableCols[0]]}</td>
                            <td style={{width: "50%",borderRight: "1.5px solid black"}}>{product[tableCols[1]]}</td>
                            <td style={{width: "15%",borderRight: "1.5px solid black"}}>{product[tableCols[2]]}</td>
                            <td style={{width: "15%",borderRight: "1.5px solid black"}}>{product[tableCols[3]]}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}