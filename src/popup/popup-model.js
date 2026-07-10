// popup-model.js

import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import mypay from '../img/mypay.png';
import xpress from '../img/xpress_s.png'
import omMandir from '../img/ommandi_r.png'
import kpl from '../img/kp_l.png'
import hridayaImg from '../img/hridaya.png'
import hridayaAdminImg from '../img/hridaya_admin.png'
import joc_nike from '../img/joc_nike.png'
import pro_gym from '../img/gym_probodybuilding.png'



function PopupModel({ skill, show, onClose }) {
    const [skills, setSkill] = useState('');
    const [subMenu, setSubMenu] = useState('');
    const [isOpenSubPopUp, setIsOpenSubPopUp] = useState(false);


    useEffect(() => {
        console.log(show, onClose)
        setSkill(skill)

    });

    // const showSubPopup = () => { }
    const onCloseSubPopup = () => { setIsOpenSubPopUp(false); }
    const detailForPopup = (flag, data) => {
        setIsOpenSubPopUp(flag)
        setSubMenu(data)

    }

    const viewDemo =(data)=>{

console.log(data)
if(data ==='MyPay'){
    
   
     window.open('https://customer.mypay.com.np/', '_blank');

}else if(data === 'Xpress'){
     window.open('https://www.xpressewa.com/', '_blank');

}else if(data === 'Mandir'){
     window.open('https://shreeommandir.com/', '_blank');

}
else if(data === 'kpl'){
     window.open('https://web.kplt20.org/', '_blank');

}
else if(data === 'MyPayGold'){
     window.open('https://mypaygold.com/', '_blank');

}
else if(data === 'joc_nike'){
     window.open('https://www.youtube.com/@jocnikemsexyniknowit', '_blank');

}
else if(data === 'gym_pro'){
     window.open('https://www.facebook.com/probnf/', '_blank');
    //  window.open('https://www.facebook.com/probnf/', '_blank');

}
else if(data === 'hridaya'){
     window.open('https://hridaya-customer-contactus.netlify.app', '_blank');

}
else if(data === 'hridayaAdminPortal'){
     window.open('https://hridaya-admin-latest.netlify.app/', '_blank');

}

    }


    return (
        <div>
            <Modal show={show} onHide={onClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>{skill} </Modal.Title>
                </Modal.Header>
                {/* my skills */}
                {skills === 'Frontend' && (
                    <div className="skills-section m-1">
                        <div>
                            <h2 className="section-title">Languages & Markup:</h2>
                            <ul>
                                <li>HTML5</li>
                                <li>CSS3 / SCSS / SASS</li>
                                <li>JavaScript (ES6+)</li>
                                <li>TypeScript</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="section-title">Frameworks & Libraries:</h2>
                            <ul>
                                <li>React.js</li>
                                <li>Angular</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="section-title">Styling & UI:</h2>
                            <ul>
                                <li>Bootstrap</li>
                                <li>Tailwind CSS</li>
                                <li>Material UI</li>
                                <li>CSS Grid & Flexbox</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="section-title">Other Frontend Tools:</h2>
                            <ul>
                                <li>Webpack / Vite / Parcel</li>
                                <li>npm / Yarn</li>
                                <li>Responsive & Mobile-first Design</li>
                                <li>Cross-browser Compatibility</li>
                            </ul>
                        </div>
                    </div>
                )}

                {skills === 'Backend' && (
                    <div className="skills-section m-1">
                        <div>
                            <h2 className="section-title">Languages:</h2>
                           <ul>
    <li>Node.js</li>
    <li>Express.js</li>
    <li>MongoDB</li>
    <li>RESTful APIs</li>
    <li>JWT Authentication</li>
    <li>Multer</li>
    <li>MVC Architecture</li>
    <li>MERN/MEAN</li>
</ul>
                        </div>
                    </div>
                )}

                {skills === 'Graphic Designing' && (
                    <div className="skills-section m-1">
                        <div>
                            <h2 className="section-title">Design Tools:</h2>
                            <ul>
                                <li>Adobe Photoshop</li>
                            </ul>
                        </div>
                    </div>
                )}

                {skills === 'Tools' && (
                    <div className="skills-section m-1">
                        <div>
                            <h2 className="section-title">Development & Productivity Tools:</h2>
                            <ul>
                                <li>Git</li>
                                <li>GitHub</li>
                                <li>Visual Studio Code</li>
                                <li>Postman</li>
                                <li>Adobe Photoshop</li>
                                <li>PowerDirector (Video Editor)</li>
                            </ul>
                        </div>
                    </div>
                )}


                {skills === 'Graphic Desinging' && (
                    <div className="skills-section m-1">
                        <div>
                            <h2 className="section-title">Design Tools:</h2>
                            <ul>
                                <li>Adobe Photoshop</li>
                            </ul>
                        </div>
                    </div>
                )}

                {/* what i do */}

                {skills === 'Web Sites and Platforms' && (
                    <div className="skills-section m-1">
                        <div>
                            <h2 className="section-title">Web sites:</h2>

                            <ul>
                                <li className="cursor-pointer" >MyPay Digital Wallet <button className="btn btn-info btn-sm ms-2" onClick={() => { detailForPopup('true', 'MyPay') }}>Detail</button> <button onClick={() => { viewDemo( 'MyPay') }} className="btn btn-light btn-sm ms-1">View Demo</button></li>
                                <li className="cursor-pointer" >Xpress Sewa: a chat system. <button className="btn btn-info btn-sm  ms-2" onClick={() => { detailForPopup('true', 'Xpress') }}>Detail</button> <button onClick={() => { viewDemo( 'Xpress') }} className="btn btn-light btn-sm ms-1">View Demo</button></li>
                                <li className="cursor-pointer" >Om Mandir <button className="btn btn-info btn-sm ms-2" onClick={() => { detailForPopup('true', 'OmMandir') }}>Detail</button> <button onClick={() => { viewDemo( 'Mandir') }} className="btn btn-light btn-sm ms-1">View Demo</button></li>
                                <li className="cursor-pointer" >KPL-live sports info & Marketplace  <button className="btn btn-info btn-sm ms-2" onClick={() => { detailForPopup('true', 'kpl') }}>Detail</button> <button onClick={() => { viewDemo( 'kpl') }} className="btn btn-light btn-sm ms-1">View Demo</button></li>
                                <li className="cursor-pointer" >Hridaya (E-Commerce) <button className="btn btn-info btn-sm ms-2" onClick={() => { detailForPopup('true', 'hridaya') }}>Detail</button> <button onClick={() => { viewDemo( 'hridaya') }} className="btn btn-light btn-sm ms-1">View Demo</button></li>
                                <li className="cursor-pointer" >Hridaya (Admin Portal) <button className="btn btn-info btn-sm ms-2" onClick={() => { detailForPopup('true', 'hridayaAdminPortal') }}>Detail</button> <button onClick={() => { viewDemo( 'hridayaAdminPortal') }} className="btn btn-light btn-sm ms-1">View Demo</button></li>
                            </ul>
                        </div>
                    </div>
                )}

                   {skills === 'Content creation' && (
                    <div className="skills-section m-1">
                        <div>
                            <h2 className="section-title">Youtube channels:</h2>

                            <ul>
                                <li className="cursor-pointer" >Joc_Nike <button className="btn btn-info btn-sm ms-2" onClick={() => { detailForPopup('true', 'joc_nike') }}>Detail</button> <button onClick={() => { viewDemo( 'joc_nike') }} className="btn btn-light btn-sm ms-1">View Demo</button></li>
                                 </ul>
                        </div>
                    </div>
                )}

                

                   {skills === 'Gym Trainer' && (
                    <div className="skills-section m-1">
                        <div>
                            <h2 className="section-title">Gyms:</h2>

                            <ul>
                                <li className="cursor-pointer" >Pro Bodybuilding & Fitness <button className="btn btn-info btn-sm ms-2" onClick={() => { detailForPopup('true', 'gym_pro') }}>Detail</button> <button onClick={() => { viewDemo( 'gym_pro') }} className="btn btn-light btn-sm ms-1">View Demo</button></li>
                               </ul>
                        </div>
                    </div>
                )}

                <Modal.Footer>
                    {/* <Button variant="secondary" onClick={onClose}>Close</Button> */}
                </Modal.Footer>
            </Modal>


            {/* subPopup */}
            {isOpenSubPopUp == 'true' &&
                <Modal show={isOpenSubPopUp} onHide={() => { onCloseSubPopup() }} centered>
                    <Modal.Header closeButton>
                        <Modal.Title>{subMenu}</Modal.Title>
                    </Modal.Header>


                    {subMenu === 'MyPay' && (
                        <div className="skills-section m-1">
                            <div>   <div class="page">
                                <div class="container">
                                    <img src={mypay} class="image-placeholder"></img>

                                    <div class="main-title">{subMenu}</div>

                                    <div class="subtitle">MyPay is a digital wallet and online payment platform that allows users to pay bills, transfer money, recharge services, and make secure online transactions quickly and easily.</div>

                                    <div class="description">
                                        <h2><strong>I have done :</strong></h2>

                                     

                                     

                                        <div>
                                            <strong>MyPay Gold:</strong>
                                            Enables secure digital gold transactions with intuitive interfaces, transaction history tracking, and seamless KYC, PAN, and bank verification processes.
                                            <br></br>
                                            <button onClick={() => { viewDemo( 'MyPayGold') }} class="btn btn-primary btn-sm mt-2">View Demo</button>
                                        </div>

                                        <br />


                                        <br />

                                        <div>
                                            <strong>MyPay Digital Wallet:</strong>
                                            Integrates over 50 services, simplifies payments, incorporates events and voting features, and enhances user data flow through KYC, password/PIN, and OTP-based bank/wallet linkage.
                                            <br></br>
                                            <button onClick={() => { viewDemo( 'MyPay') }} href="#" class="btn btn-primary btn-sm mt-2">View Demo</button>
                                        </div>
                                    </div>



                                </div>
                            </div></div>


                        </div>
                    )}

                     {subMenu === 'Xpress' && (
                        <div className="skills-section m-1">
                            <div>   <div class="page">
                                <div class="container">
                                    <img src={xpress} class="image-placeholder"></img>

                                    <div class="main-title">{subMenu}</div>

                                    <div class="subtitle">Xpress Sewa appears to be an online money‑transfer service that lets people send money from one country (notably Australia) to Nepal quickly and securely. It’s commonly used for remittance — sending money to family or recipients in Nepal.</div>

                                   



                                </div>
                            </div></div>


                        </div>
                    )}

                           {subMenu === 'OmMandir' && (
                        <div className="skills-section m-1">
                            <div>   <div class="page">
                                <div class="container">
                                    <img src={omMandir} class="image-placeholder"></img>

                                    <div class="main-title">{subMenu}</div>

                                    <div class="subtitle">Shree Om Mandir is a digital religious and spiritual service platform aimed at helping devotees access Hindu rituals, pujas (prayers), astrology services, and spiritual products online — no matter where they are in the world.</div>

                                   



                                </div>
                            </div></div>


                        </div>
                    )}
                                {subMenu === 'kpl' && (
                        <div className="skills-section m-1">
                            <div>   <div class="page">
                                <div class="container">
                                    <img src={kpl} class="image-placeholder"></img>

                                    <div class="main-title">{subMenu}</div>

                                    <div class="subtitle">KPL (Koshi Pride League) is Nepal’s premier regional cricket tournament that celebrates passion, competition, and community through sport. It brings together top local cricket talent from across Koshi Pradesh to compete in an exciting format, giving emerging players a platform to showcase their skills and entertain fans with thrilling matches. Beyond the matches, KPL fosters community engagement and pride, uniting cricket enthusiasts around live action, real‑time updates, and memorable moments on and off the field.</div>

                                   



                                </div>
                            </div></div>


                        </div>
                    )}
                     {subMenu === 'gym_pro' && (
                        <div className="skills-section m-1">
                            <div>   <div class="page">
                                <div class="container">
                                    <img src={pro_gym} class="image-placeholder"></img>

                                    <div class="main-title">{subMenu}</div>

                                    <div class="subtitle">Joc_Nike focuses on motorcycle-related content. It features videos showcasing bike rides, modifications, and vlog-style footage from various motorcycle experiences. With around 17 uploads and roughly 371 subscribers, the channel seems to cater to motorcycle enthusiasts interested in bike culture, customization, and riding adventures. The content is presented in an engaging, personal style, giving viewers a glimpse into the creator’s biking lifestyle.</div>

                                   



                                </div>
                            </div></div>


                        </div>
                    )}
                        {subMenu === 'hridaya' && (
                        <div className="skills-section m-1">
                            <div>   <div class="page">
                                <div class="container">
                                    <img src={hridayaImg} class="image-placeholder"></img>

                                    <div class="main-title">{subMenu}</div>

                                    <div class="subtitle">Hridaya Admin Portal – MERN Admin & Merchant Management System

The Hridaya Admin Portal is a role-based management system developed for the Hridaya E-Commerce Platform. It enables administrators and merchants to efficiently manage products, merchants, and customer orders through a secure dashboard.

User Roles
Super Admin
Create and manage administrator accounts.
Remove administrator accounts.
Approve or reject merchant registration requests.
Manage products, product categories, and product variants.
Monitor merchant activities and order status.
Admin
Approve or reject merchant registration requests.
Create, edit, and delete product categories.
Add, edit, and manage products.
Create and update product variants (size, color, fragrance, pricing, etc.).
Manage the product catalog and inventory.
Merchant
View assigned customer orders.
Update delivery status of orders.
Manage order fulfillment by changing order status to:
Pending
Delivered
Failed
Rejected
Key Features
Role-Based Access Control (Super Admin, Admin, Merchant)
Secure JWT Authentication
Merchant Approval Workflow
Product Category Management
Product & Variant Management
Order Management Dashboard
Delivery Status Tracking
Responsive Admin Dashboard
RESTful API Integration
MongoDB Database Management
Technologies Used
React.js
TypeScript
Node.js
Express.js
MongoDB
Mongoose
JWT Authentication
Axios
Tailwind CSS
React Router
Git & GitHub
Render
My Role
Designed and developed the complete admin dashboard and backend APIs.
Implemented role-based authentication and authorization.
Built merchant approval and management workflows.
Developed CRUD operations for product categories, products, and product variants.
Created order management and delivery status tracking features.
Designed MongoDB schemas and RESTful APIs for efficient data management.</div>

                                   



                                </div>
                            </div></div>


                        </div>
                    )}

                            {subMenu === 'hridayaAdminPortal' && (
                        <div className="skills-section m-1">
                            <div>   <div class="page">
                                <div class="container">
                                    <img src={hridayaAdminImg} class="image-placeholder"></img>

                                    <div class="main-title">{subMenu}</div>

                                    <div class="subtitle">Hridaya – MERN E-Commerce Platform

Hridaya is a full-stack MERN e-commerce platform designed for purchasing a wide variety of handcrafted candles. The application provides a secure and user-friendly shopping experience, allowing customers to browse products, manage their cart, and place orders with ease.

Key Features
User Registration with Email OTP Verification
Secure Login and Authentication using JWT
Forgot Password and Password Reset
User Profile Management
Browse Multiple Candle Categories
Product Variants (Size, Color, Fragrance)
Product Search and Detailed Product Pages
Shopping Cart Management
Coupon and Discount Calculation
Checkout and Order Placement
Order Summary with Shipping Charges
Image Upload for Products and User Profiles
Protected Routes for Authenticated Users
Responsive Design for Desktop and Mobile Devices
Backend Features
RESTful API development using Node.js and Express.js
MongoDB database design with Mongoose
JWT-based Authentication and Authorization
Password Encryption using bcrypt.js
OTP Email Verification using Nodemailer
File Upload Management using Multer
Cart, Checkout, and Order Management APIs
Coupon and Discount Processing
Environment Variable Management with dotenv
CORS Configuration and Secure API Handling
Technologies Used
React.js
TypeScript
Node.js
Express.js
MongoDB
Mongoose
JWT Authentication
bcrypt.js
Multer
Nodemailer
Axios
React Router
Tailwind CSS
Git & GitHub
Netlify
Render
My Role
Designed and developed both the frontend and backend of the application.
Built secure authentication with email OTP verification and JWT.
Developed REST APIs for products, users, carts, checkout, and orders.
Designed MongoDB schemas and managed database operations using Mongoose.
Implemented responsive user interfaces with React and TypeScript.
Integrated image uploads, coupon logic, checkout flow, and order management.
Deployed the frontend on Netlify and the backend on Render.</div>

                                   



                                </div>
                            </div></div>


                        </div>
                    )}
                    
                    


                    



                    <Modal.Footer>
                        {/* <Button variant="secondary" onClick={onClose}>Close</Button> */}
                    </Modal.Footer>
                </Modal>

            }

        </div>

    );
}

export default PopupModel;
