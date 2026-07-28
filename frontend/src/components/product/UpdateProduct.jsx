import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Header from '../common/Header';

export default function UpdateProduct(){
    const {id} = useParams();
    const [product, setProduct] = useState(null);
   
    useEffect(()=>{
        async function getProduct(){
            let p = await fetch("http://localhost:8000/api/product/"+id);
            p = await p.json();
            setProduct(p);
        }
        getProduct();
    } , [])

    return <>
        <Header />
        <div>
            <h1>Update Product</h1>
            <div>
                <div className='mb-3'>   
                    <input type='text' defaultValue={product?.name} />
                </div>
                <div className='mb-3'>
                    <input type='text' defaultValue={product?.price} />
                </div>
                <div className='mb-3'>
                    <textarea type='text' defaultValue={product?.description} ></textarea>
                </div>
                <div className='mb-3'>
                    <input type='file' defaultValue={product?.file_path} />
                </div>
                <div className='mb-3'>
                    <img width={200} src={"http://localhost:8000/storage/"+product?.file_path} />
                </div>
                <div className='mb-3'>
                    <button className='btn btn-success' >Update Product</button>
                </div>
            </div>
        </div>
    </>
}