import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('user-info')) {
            navigate('/add');
        }
    }, [])

    async function login() {
        let item={email,password};
        let result = await fetch("http://localhost:8000/api/login" , {
            method : 'POST',
            body : JSON.stringify(item),
            headers : {
                "Content-Type" : "application/json",
                "Accept" : "application/json"
            } 
        })
        result = await result.json();
        localStorage.setItem("user-info", JSON.stringify(result));
        navigate('/add');
    }

    return <div>
        <h1>Login</h1>
        <div className="col-sm-6 offset-sm-3">
            <div className="mt-3">
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="Email" />
            </div>
            <div className="mt-3">
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" placeholder="Password" />
            </div>
            <div className="mt-3">
                <button onClick={login} className="btn btn-primary">Login</button>
            </div>
        </div>
    </div>
}