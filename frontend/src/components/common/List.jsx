import { Table } from "react-bootstrap";
import { Link } from "react-router";

export default function List({collection}){

     async function deleteProduct(id) {
        await fetch("http://localhost:8000/api/delete/" + id, {
            method: 'DELETE'
        })
        // res = await res.json();
        getAllProducts()
    }

    return <>
     {
                collection && collection.length > 0 ? <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Description</th>
                            <th>Image</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            collection.map(p => <tr key={p.id} className="align-middle">
                                <td>{p.id}</td>
                                <td>{p.name}</td>
                                <td>{p.price}</td>
                                <td>{p.description}</td>
                                <td><img width={100} src={"http://localhost:8000/storage/" + p.file_path} /></td>                             
                                <td>
                                    <span onClick={()=>deleteProduct(p.id)} className="btn btn-danger">delete</span>
                                    <Link to={"update/"+p.id}>
                                        <span className="btn btn-success ms-2">update</span>
                                    </Link>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </Table>
                    :
                    <span>No products yet</span>
            }
    </>
}