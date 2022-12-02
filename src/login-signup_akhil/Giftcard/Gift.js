import React from "react";
import "./Gift.css"

function Gift(){
    return(
        <div className="main">
            <div className="main">
                <div><img src="https://res.cloudinary.com/makerinc/c_fill,g_auto,f_auto,q_auto:best,fl_preserve_transparency,dpr_1,w_1366,h_150/maker-live/uploads/2d00ecc85e50b057967e4d28a8608c38/958deaff741dfc86cb6d00275a9e6dae/strip-code-1.png" style={{
                    width:"100%", height:"120px", marginTop:"-10px"
                }}/></div>
                <div className="giftcard">
                    <h1 style={{marginTop:"80px"}}>E-Gift Cards</h1>
                    <p style={{
                        fontSize:"18px",
                        letterSpacing:"1px"
                        }}>Some festive cheer coming your way</p>
                </div>
                <div style={{
                    display:"grid",
                    gridTemplateColumns:"repeat(2,auto)",
                    marginLeft:"100px",
                    
                }}
                >
                    <div><img style={{
                        width:"90%",
                        height:"600px"
                    }}
                    src="https://res.cloudinary.com/makerinc/c_fill,g_auto,f_auto,q_auto:best,fl_preserve_transparency,dpr_1,w_750,h_780/maker-live/uploads/2d00ecc85e50b057967e4d28a8608c38/d2a2b804d75c71b9e35c37643029ca91/GC-1.png"/>
                    <p style={{marginTop:"-120px", marginLeft:"250px"}}>Best Wishes E-Gift card</p>
                    </div>
                    <div>
                    <img style={{
                        width:"90%",
                        height:"600px"
                    }}
                    src="https://res.cloudinary.com/makerinc/c_fill,g_auto,f_auto,q_auto:best,fl_preserve_transparency,dpr_1,w_750,h_780/maker-live/uploads/2d00ecc85e50b057967e4d28a8608c38/48ffd669854ab1bd80b2824b4481f613/GC-2.png"/>
                    <p style={{marginTop:"-120px", marginLeft:"250px"}}>Festive Gifting E-Gift card</p>
                    </div>
                    <div>
                    <img style={{
                        width:"90%",
                        height:"600px"
                    }}
                    src="https://res.cloudinary.com/makerinc/c_fill,g_auto,f_auto,q_auto:best,fl_preserve_transparency,dpr_1,w_750,h_780/maker-live/uploads/2d00ecc85e50b057967e4d28a8608c38/e25c883e003bbad5bea0a54f4a167462/GC-4.4.png"/>
                    <p style={{marginTop:"-120px", marginLeft:"250px"}}>Celebration E-Gift card</p>
                    </div>
                    <div>
                    <img style={{
                        width:"90%",
                        height:"600px"
                    }}
                    src="https://res.cloudinary.com/makerinc/c_fill,g_auto,f_auto,q_auto:best,fl_preserve_transparency,dpr_1,w_750,h_780/maker-live/uploads/2d00ecc85e50b057967e4d28a8608c38/ec3c1b56fba705ae4f7a75d387b668c0/GC-3.4.png"/>
                    <p style={{marginTop:"-120px", marginLeft:"250px"}}>Feel-Good E-Gift card</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gift;