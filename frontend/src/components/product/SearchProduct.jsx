import { useState } from "react";
import { Table } from "react-bootstrap";
import List from "../common/List";

export default function SearchProduct() {

    const [result, setResult] = useState([]);

    async function search(key) {
        let result = await fetch("http://localhost:8000/api/search/" + key);
        result = await result.json();
        setResult(result);
    }

    return <div className="col-md-9 mx-auto">
        <input type="text" onChange={(e) => search(e.target.value)} className="form-control" placeholder="search product" />
        <div className="mt-3">
           <List collection={result} />
        </div>
    </div>
}