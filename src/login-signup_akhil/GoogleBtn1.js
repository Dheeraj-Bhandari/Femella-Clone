import React from 'react'
import GoogleLogo from './images/google.png'
import './GoogleBtn1.css'
import { signInWithGoogle } from "./Firebase";

const GoogleBtn1 = () => {
    return (
        <div className='container'>
            <div className='g-btn'>
                <div className='content-wrapper'>
                    <div className='logo-wrapper'>
                        <img src={GoogleLogo} />
                    </div>
                    <span className='text-container'>
                        <span onClick={signInWithGoogle} >Google Signup</span>
                    </span>
                    
                </div>
            </div>
        </div>
    )
}
export default GoogleBtn1