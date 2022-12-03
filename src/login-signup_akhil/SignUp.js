import React,{useState,useEffect} from 'react';
import './SignUp.css'
import GoogleBtn1 from './GoogleBtn1';
import FaceBtn1 from './FaceBtn1';
import Validation from './Validation';

const SignUp = () => {
    const [data, setData] = useState({
        fullname:'',
        email:'',
        password:'',
        confirmpassword:''
    })
    const {fullname,email,password,confirmpassword} = data;
    const [errors, setErrors] = useState({})
    // const [isSubmit, setIsSubmit] = useState(false)

    const changeHandler = (e) =>{
        setData({...data,[e.target.name]:e.target.value})
    }
    const submitHandler = (e) => {
        e.preventDefault()
        console.log(data)
        setErrors(Validation(data))
        // setIsSubmit(true);
    }
    useEffect(()=>{
        if(Object.keys(errors).length === 0 && (data.email !== "" && data.password !== "" && data.fullname !== "")){
            alert("SignUp Successfully!");
        }
    },[errors])
    return(
        <div>
            <center>
                <form>
                <h1>Create account</h1> <br/>
                <p>By clicking any of the social login buttons you agree to the terms of privacy policy described</p>
                <p style={{color:"rgb(4, 120, 166)"}}>here</p>
                <hr style={{marginTop:"4px", marginRight:"4px"}}></hr>
                <FaceBtn1 />
                <GoogleBtn1 />
                <input type="text" name="fullname" value={fullname} placeholder="Full name" onChange={changeHandler} /> <br/>
                { errors.fullname && <p style={{color:"red", fontSize:"12px"}}>{errors.fullname}</p> }
                <input type="email" name="email" value={email} placeholder="Email" onChange={changeHandler} /> <br/>
                { errors.email && <p style={{color:"red", fontSize:"12px"}}>{errors.email}</p> }
                <input type="password" name="password" value={password} placeholder="Password" onChange={changeHandler} /> <br/>
                { errors.password && <p style={{color:"red", fontSize:"12px"}}>{errors.password}</p> }
                <input type="password" name="confirmpassword" value={confirmpassword} placeholder="Confirm Password" onChange={changeHandler} /> <br/>
                { password !== confirmpassword ? <p style={{color:"red"}}>passwords not matching</p> : null }
                <button onClick={submitHandler} className="btn-signup">Create</button>
                </form>
            </center>
        </div>
    )
}
export default SignUp