import { useEffect, useState } from "react"
import List from "../common/List";

export default function ListProducts() {

    const [data, setData] = useState([]);


    useEffect(() => {
        getAllProducts()
    }, [])

   

    async function getAllProducts() {
        let result = await fetch("http://localhost:8000/api/list");
        result = await result.json();
        setData(result);
    }

    return <div className="col-md-11 m-5">
        <List collection={data} />
    </div>
}