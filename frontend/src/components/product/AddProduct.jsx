import { useState } from "react"

export default function AddProduct() {

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [photo, setPhoto] = useState("");
    const [description, setDescription] = useState("");

    async function addProduct() {
        const formData = new FormData();
        formData.append('name', name);
        formData.append('product-photo', photo);
        formData.append('price', price);
        formData.append('description', description);
        let result = await fetch("http://localhost:8000/api/addproduct", {
            method: 'POST',
            body: formData
        });
        console.log(result.status);

        const text = await result.text();
        alert(text)
    }

    return <div>
        <h1>Add product</h1>
        <div className="col-md-3 offset-md-4">
            <div className="mt-3">
                <input onChange={(e) => setName(e.target.value)} type="text" placeholder="Product name" className="form-control" />
            </div>
            <div className="mt-3">
                <input onChange={(e) => setPhoto(e.target.files[0])} type="file" className="form-control" />
            </div>
            <div className="mt-3">
                <input onChange={(e) => setPrice(e.target.value)} type="text" placeholder="Product price" className="form-control" />
            </div>
            <div className="mt-3">
                <textarea onChange={(e) => setDescription(e.target.value)} className="form-control" placeholder="Product description"></textarea>
            </div>
            <div className="mt-3">
                <button onClick={addProduct} className="btn btn-primary">Add Product</button>
            </div>
        </div>
    </div>
}