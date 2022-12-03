import React from 'react';
import './Forgotpass.css'

const Forgotpass = () => {
    return(
        <div>
            <center>
                <form>
                <h1 style={{letterSpacing:'1px'}}>Resert your password</h1>
                <p style={{color:'grey', fontWeight:'lighter', letterSpacing:'1px', fontSize:'13px', marginBottom:'30px'}}>We will send you an email to reset your password</p>
                <input type="email" name='email' placeholder='Email' /> <br/>
                <button className='btn-submit'>Submit</button>
                <p className='cancel'>CANCEL</p>
                </form>
            </center>
        </div>
    )
}
export default Forgotpass