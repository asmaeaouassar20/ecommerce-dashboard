import { useEffect } from "react";
import { useNavigate } from "react-router";

export default function Login(){
    const navigate = useNavigate();

    useEffect(()=>{
            if(localStorage.getItem('user-info')){
                navigate('/add');
            }
        } , [])
    
    return <div>
        <h1>Login</h1>
    </div>
}