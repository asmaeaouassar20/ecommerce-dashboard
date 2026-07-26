import { useEffect, useState } from "react"
import { Table } from "react-bootstrap";

export default function ListProducts() {

    const [data, setData] = useState([]);

    useEffect(() => {
        async function getAllProducts() {
            let result = await fetch("http://localhost:8000/api/list");
            result = await result.json();
            setData(result);
        }
        getAllProducts()
    }, [])


    return <div className="col-md-11 m-5">
        {
            data ? <Table striped bordered hover>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Description</th>
                    <th>Image</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map( p => <tr key={p.id}>
                    <td>{p.id}</td>
                    <td>{p.name}</td>
                    <td>{p.price}</td>
                    <td>{p.description}</td>
                    <td><img width={100} src={"http://localhost:8000/storage/"+p.file_path} /></td>
                </tr>)
                }
            </tbody>
        </Table>
        :
        <span>No products yet</span>
        }
    </div>
}