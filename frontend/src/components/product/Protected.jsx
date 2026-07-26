import { useEffect } from "react";
import { useNavigate } from "react-router"

export default function Protected({ Composant }) {
    const navigate = useNavigate();
    useEffect(() => {
        if(!localStorage.getItem('user-info')){
            navigate("/login");
        }
    }, [])
    return <div>
        <Composant />
    </div>
}