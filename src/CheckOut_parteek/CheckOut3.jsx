import React from 'react'
import banner from "../Components/photos/Capture.PNG"
import "./Checkout3.css"
import payment from "./photos/payment_gateway.PNG"
import { Checkbox, CheckboxGroup } from '@chakra-ui/react'
import { Link } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import discount from "./photos/discount_1.PNG"
import delievery from "./photos/delievery_2.PNG"
import { Radio, RadioGroup ,Stack} from '@chakra-ui/react'

const popup = () =>console.log("Wow so easy!");
function Checkout2() {
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
        <div className='selectedbox1'>
         <div>

         <p>Your order is confirmed</p>
         <p>You’ll receive an email when your order is ready</p>
         </div>
         <div>
         <p>Order updates</p>
         <p>You’ll get shipping and delivery updates by email.</p>
         </div>
         <div>
         <p>NOTE: Order containing gift cards will not be able to fulfilled</p>
         <p>if Cash on Delivery (COD) is chosen. Please choose one of our other payment gateways available if you are purchasing a gift card as part of your order.</p>
         <p>Question can be directed to info@femella.in</p>
         </div>
        </div> 

         </div>
         <div className='Con_1_Card_4_form'>
        <p className='Con_1_Card_4_address'>Customer information</p>
         
     
        <div className='selectedbox2'>
        <div>
      <table>
        <tr>
        <th>
        Contact information
        </th>
        <th>
        Payment method
        </th>
        </tr>
        <tr>
            <td>
            parteekarora007@gmail.com
            </td>
            <td>
            Cash on Delivery (COD) - ₹2,659.00
            </td>
        </tr>
        <tr>
        <th>
        Shipping address
        </th>
        <th>
        Billing address
        </th>

        </tr>
        <tr>
            <td>
            parteek kumar
44/8near rose gardenpatiala
147001 patiala PB
India
7355167733
            </td>
            <td>
            parteek kumar
44/8near rose gardenpatiala
147001 patiala PB
India
7355167733
            </td>
        </tr>

        <tr>
            <th>
            Shipping method
            </th>
            
        </tr>
        <tr>
        Standard Shipping with COD


        </tr>
      </table>
        </div>
      
          </div>

       
         
         </div>

<div className='Con_1_Card_4_button'>
        <div>
        <Link>
          Need help?Contact us
        </Link>
        </div>
        <div className='button_section'>
      <button >Complete order</button>
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
                
                    </div>
                
                
                  
                    <div className='Con2_Card_4'>
                 <hr></hr>
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
   
    
  )
}

export default Checkout2