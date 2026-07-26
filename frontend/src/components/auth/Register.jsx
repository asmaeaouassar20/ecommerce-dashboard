import { useState } from "react"
import { useNavigate } from "react-router";

export default function Register() {

    const [name,setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    async function signup(){
        let item = {name,email,password}
        let result = await fetch("http://localhost:8000/api/register", {
            method : 'POST',
            body : JSON.stringify(item),
            headers : {
                "Content-Type" : "application/json",
                "Accept" : "application/json"
            }
        });     
        result = await result.json();
        localStorage.setItem("user-info" , JSON.stringify(result));
        navigate("/add");
    }

    return <div>
        <h1>Register</h1>
        <div className="col-sm-6 offset-sm-3">
            <div className="mb-3">
                <input type="text"value={name} onChange={(e)=>setName(e.target.value)} className="form-control" placeholder="name" />
            </div>
            <div  className="mb-3">
                <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" placeholder="email" />
            </div>
            <div  className="mb-3">
                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" placeholder="password" />
            </div>
            <div className="mb-3">
                <button onClick={signup} className="btn btn-primary">Sign Up</button>
            </div>
        </div>
    </div>
}