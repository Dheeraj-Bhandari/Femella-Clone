import React,{ useState,useEffect } from 'react';
import FaceBtn from './FaceBtn';
import GoogleBtn from './GoogleBtn';
import './Login.css'
import Validation from './Validation';


const Login = () => {
    const [data, setData] = useState({
        email:'',
        password:''
    })
    const {email, password} = data;

    const [errors, setErrors] = useState({})
    // const [isSubmit, setIsSubmit] = useState(false)

    const changeHandler=(e) =>{
        setData({...data,[e.target.name]:e.target.value})
    }
    const submitHandler = (e) =>{
        e.preventDefault()
        console.log(data)
        setErrors(Validation(data))
        // setIsSubmit(true);
    }
    useEffect(()=>{
        if(Object.keys(errors).length === 0 && (data.email !== "" && data.password !== "")){
            alert("Login Successfully!");
        }
    },[errors])
    return(
        <div>
            <center>
                <form>
                <h1 style={{fontSize:"20px"}}>Login</h1> <br/>
                <p>By clicking any of the social login buttons you agree to the terms of privacy policy described</p>
                <p style={{color:"rgb(4, 120, 166)"}}>here</p>
                <hr style={{marginTop:"4px", marginRight:"4px"}}></hr>
                <FaceBtn />
                <div>
                    <GoogleBtn />
                </div>
                <input type="email" name="email" value={email} placeholder="Email" onChange={changeHandler} /> <br/>
                { errors.email && <p style={{color:"red", fontSize:"12px"}}>{errors.email}</p> }
                <input type="password" name="password" value={password} placeholder="Password" onChange={changeHandler} /> <br/>
                { errors.password && <p style={{color:"red", fontSize:"12px"}}>{errors.password}</p> }
                <p style={{paddingRight:"270px", textDecorationLine:"underline"}}>FORGOT YOUR PASSWORD?</p>
                <button onClick={submitHandler} className="login">Sign in</button>
                <p className="btn-create">CREATE ACCOUNT</p>
                </form>
            </center>
        </div>
    )
}
export default Login
