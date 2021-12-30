import { useState } from "react"
import {useDispatch} from "react-redux"
import "./Login.css"
import { login } from "../../redux/apiCalls"


const Login = () => {

    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const dispath = useDispatch();
    const handleClick = (e) => {
        e.preventDefault();
        login(dispath,{username ,password});
    }

    return (
        <div style={{height : "100vh", display : "flex",flexDirection:"column", "alignItems" : "center" , "justifyContent" : "center"}}>
            <input style={{padding:10,marginBottom:20}} type="text" placeholder="username" onChange={e => setUsername(e.target.value)}/>
            <input style={{padding:10,marginBottom:20}} type="password" placeholder="password" onChange={e => setPassword(e.target.value)}/>
            <button style={{padding:"10px",width:"100px"}} onClick={handleClick}>Login</button>
        </div>
    )
}

export default Login
