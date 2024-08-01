import React, { useState } from 'react'
import "../styles/login.css"
import { useNavigate } from 'react-router-dom'
const Login = () => {
    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    
    const navigate = useNavigate();
    const onButtonClick = () => {
        // You'll update this function later...
        if(user == "bonyan@kala" && password == "bonyan@1234"){
            localStorage.setItem("user", JSON.stringify({user}))
            navigate("/bonyan-admin-panel")
        }else{
            setEmailError("email is wrong")
        }
    }

  return (
    <div className={"mainContainer"}>
        <div className={"titleContainer"}>
            <div>Login</div>
        </div>
        <br />
        <div className={"inputContainer"}>
            <input
                value={user}
                placeholder="Enter your username here"
                onChange={ev => setUser(ev.target.value)}
                className={"inputBox"} />
            <label className="errorLabel">{emailError}</label>
        </div>
        <br />
        <div className={"inputContainer"}>
            <input
                value={password}
                placeholder="Enter your password here"
                onChange={ev => setPassword(ev.target.value)}
                className={"inputBox"} />
            <label className="errorLabel">{passwordError}</label>
        </div>
        <br />
        <div className={"inputContainer"}>
            <input
                className={"inputButton"}
                type="button"
                onClick={onButtonClick}
                value={"Log in"} />
        </div>
    </div>

  )
}

export default Login