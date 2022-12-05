import React from 'react'
import banner from "../Components/photos/Capture.PNG"
import "./Checkout.css"
import payment from "./photos/payment_gateway.PNG"
import { Checkbox, CheckboxGroup } from '@chakra-ui/react'
import { Link } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import discount from "./photos/discount_1.PNG"
import delievery from "./photos/delievery_2.PNG"


import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'
  import { Input } from '@chakra-ui/react'


function Checkout() {
  return (
    <div>
                        <div className='main_banner'>
                        <img src={banner} />

                        </div>
     <div className='main_container'>
      <div className='container_1'>
       <div className='space_container'>
         <div className='logo_1'>
        <img src="https://cdn.shopify.com/s/files/1/1695/7273/files/logo_53c0cc6e-938b-4d5b-841b-152989e139e8.jpg?v=1643792377" />
         <p>Cart > Information >  Shipping  > Payment</p>
         </div>
         <div className='Con_1_Card_2'>
         <img src={payment}></img>
         </div>
         <div className='Con_1_Card_3'>
        <span><p>Contact Information</p></span>  
          <span>
        <p className='already'>Already have an account?
        <Link>Login</Link></p>
          </span>
         </div>
         <div className='Con_1_Card_3_input'>
        <input placeholder='Email'/>
    <div className='Con_1_Card_3_chkbox'>
     <Checkbox colorScheme='black' defaultChecked>

     Email me with news and offers
  </Checkbox>
     </div>   

         </div>
         <div className='Con_1_Card_4_form'>
        <p className='Con_1_Card_4_address'>Shipping addres</p>
        <div className='siingle_input'>
     
        <input placeholder='India'/>
        </div>
   
         <div className='double_input'>
         <input placeholder='First name'/>
         <input placeholder='Last name'/>  
         </div>
         <div className='siingle_input'>
         <input placeholder="Address"/>
         </div>
         <div className='siingle_input'>
         <input placeholder='Apartment, suite, etc. (optional)'/>
         </div>
        
         <div className='multiple_input'> 
         <input placeholder='City'/>
         <input placeholder='State'/>
         <input placeholder='PIN code'/>
         </div>
         <div className='single_input'> 
         <input placeholder='phone'/>
         </div>
         
         </div>
         <Checkbox colorScheme='black' defaultChecked>

 <p>	Save this information for next time</p>
</Checkbox>
<div className='Con_1_Card_4_button'>
        <div>
        <Link>
           Return  to login
        </Link>
        </div>
        <div className='button_section'>
      <button>Continue to shipping</button>
        </div>

       </div>
       <p>Refund policy Shipping policy Privacy policy Terms of service</p>
       </div>
      </div>
      <div className='container_2'>
       <div className='Container2_wrap'>
                <div className='Con2_Card_1'>
                    <div className='image_paart'>
                      <img src="https://cdn.shopify.com/s/files/1/1695/7273/products/09-11-202201789_small.jpg?v=1670059325"/>
                    </div>
                    <div className='Prod_desc'>
                    Black Hooded Cropped Fleece Zip Up<br></br>
                    Black / XS
                    </div>
                    <div className='prod_price'>
                   ₹2,374.00
                    </div>
                    </div>
                    <hr></hr>
                    <div className='Con2_Card_2'>
                                <div >
                            <input placeholder='Gift card or discount code'/>
                                </div>
                                <div>
                                    <button>Apply</button>
                                </div>
                    </div>
                    <div className='Con2_Card_3'>
                     <div className='image_1'>
                     <img src = { discount}/>
                     </div>
                     <div className='image_2'> 
                     <img src = {delievery}/>
                     </div>
                    </div>
                    <hr></hr>
                    <div className='Con2_Card_4'>
                   <table>
                    <tr>
                      <th>
                        Subtotal
                      </th>
                    
                      <td>
                      ₹2,374.00
                      </td>
                    </tr>
                    <tr>
                      <th>
                      Shipping
                      </th>
                     
                      <td>
                      Calculated at next step
                      </td>
                    
                       </tr>
                       <tr>
                    
                      <th>
                     Total
                      </th>
                      
                      <td>
                      INR ₹2,374.00
                      </td>
                    </tr>
                   </table>
                   <hr></hr>
                    </div>
                    <div>

                    </div>
       </div>
      
      </div>
       </div>
    </div>
  )
}

export default Checkout