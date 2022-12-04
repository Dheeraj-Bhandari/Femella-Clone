import React from 'react'
import GoogleLogo from './images/google.png'
import './GoogleBtn.css'
import { signInWithGoogle } from "./Firebase";

const GoogleBtn = () => {
    
    return (
        <div className='container'>
            <div className='g-btn'>
                <div className='content-wrapper'>
                    <div className='logo-wrapper'>
                        <img src={GoogleLogo} />
                    </div>
                    <span className='text-container'>
                        <span onClick={signInWithGoogle} >Google Login</span>
                    </span>
                </div>
            </div>
        </div>
    )
}
export default GoogleBtn