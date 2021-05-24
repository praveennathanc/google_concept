import React,{useState,useEffect} from 'react';
import{HashLink as Link} from 'react-router-hash-link';
import{FcGoogle} from 'react-icons/fc';
import google from '../Component/Images/google.png';
import android from '../Component/Images/android.png';
import gphone from '../Component/Images/googlephone.png';
import camera from '../Component/Images/camera.jpg';
import phone from '../Component/Images/phone.jpg';
import {FaYoutube,FaFacebookSquare,FaTwitterSquare,FaInstagramSquare,FaLinkedin} from 'react-icons/fa';
import {CgMenuGridO} from 'react-icons/cg';
import{VscClose} from 'react-icons/vsc'
function Home() {

    const[menuBar,setMenubar] = useState(true)
    const[nav,setNav] =useState(true)
    const[color,setColor] =useState(false)
    const image = true


    const menubarHandler=()=>
    {
        setMenubar(!menuBar)
        setNav(!nav)
    }
    

    const resizeHandler=()=>
    {
        if(window.innerWidth<=850)
        {
            setNav(false)
            setMenubar(true)
        }
        else
        {
            setNav(true)
        }
    }
    const scrollHandler=()=>
    {
        if(window.scrollY >= 200)
        {
          setColor(true)
        }
        else
        {
            setColor(false)
        }
    }

    useEffect(()=>
    {
        if(window.innerWidth<850)
        {
            setNav(false)
        }
    },[])

    window.addEventListener('resize',resizeHandler)
    window.addEventListener('scroll',scrollHandler)
    return (
        <>
         <div className="navbar" style={color ?{boxShadow:'5px 5px 20px black'}: {boxShadow:"none"}}>

             <div className="logo">
              <h3><FcGoogle style={{fontSize:'30px'}}/></h3>
             </div>

             <div className="menu-bar" onClick={menubarHandler}>
                 {
                     menuBar  ?   <CgMenuGridO/> : <VscClose/>
                 }
             </div>
             <div className="navbar-nav">
                 {
                     nav
                    ?<ul>
                        <li className="nav-item"><Link to="home" smooth className="nav-link">HOME</Link></li>
                        <li className="nav-item"><Link to="#phone" smooth className="nav-link">PHONE</Link></li>
                        <li className="nav-item"><Link to="#product" smooth className="nav-link">PRODUCT</Link></li>
                        <li className="nav-item"><Link to="#io" smooth className="nav-link">IO</Link></li>
                        <li className="nav-item"><Link to="#assistant" smooth className="nav-link">ASSISTANT</Link></li>
                        <li className="nav-item"><Link to="#android" smooth className="nav-link">ANDROID</Link></li>
                    </ul>:null
                 }
                
             </div>

             <div className="sign-In">
                 <a href="https://bumper-masters.000webhostapp.com/dummy.html" rel="noreferrer">Sign In</a>
             </div>
         </div>



         <div id="home">
             <div className="home-content">
                 <div className="home-title">
                     <h1>GOOGLE</h1>
                     <p>Our mission is to organise the world’s information and make it universally accessible and useful.</p>
                     <br/>
                     <br/>
                     <div className="home-btn">
                     <a href="https://bumper-masters.000webhostapp.com/dummy.html" rel="noreferrer">Know More</a>
                     </div>
                 </div>
             </div>

            <div className="home-bg-images">
                <img src={image ? google : 'https://i.ibb.co/m0Gt5nZ/google-logo-transparent.png'} alt="googleImage" className="google-img"/>
                <img src={image ? android :'https://i.ibb.co/Xz5XDb5/android.png'} alt="AndroidImage" className="android-img"/>
            </div>
         </div>



         <div id="phone">
             <div className="phone-content">
                 <div className="phone-title">
                     <p>THE FUTURE PHONE IS HERE</p>
                     <h1>PIXEL 5</h1>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </p>
                     <br/>
                     <br/>
                     <div className="phone-btn">
                     <a href="https://bumper-masters.000webhostapp.com/dummy.html" rel="noreferrer">Know More</a>
                     </div>
                 </div>
                 <div className="phone-bg-img">
                     <img src={image ? gphone : 'https://i.ibb.co/FWJ8SkG/googlephone.png'} alt="googlePhone" className="google-phone"/>
                     <img src={image ? camera : 'https://i.ibb.co/dK4hwzV/camera.jpg'} alt="phoneCamera" className="camera"/>
                     <img src={image ? phone : 'https://i.ibb.co/C6ktJ9h/phone.jpg'} alt="phone" className="phone"/>
                 </div>
             </div>
         </div>


         <div id="product">
             <div className="product-content">
                 <div className="product-title">
                     <h1>Our Best Products</h1>
                     <p>See all the products</p>
                 </div>

                 <div className="g-product">
                     <div>
                     <img src="https://img.icons8.com/fluent/50/000000/android.png" alt="logo"/>
                         <h1>Mobiles</h1>
                         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun</p>
                         <br/>
                         <div className="p-btn">
                     <a href="https://bumper-masters.000webhostapp.com/dummy.html" rel="noreferrer">Know More</a>
                     </div>
                     </div>


                     <div>
                     <img src="https://img.icons8.com/fluent/48/26e07f/android-os.png" rel="noreferrer" alt="android"/>
                         <h1>Android OS</h1>
                         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun</p>
                         <br/>
                         <div className="p-btn">
                     <a href="https://bumper-masters.000webhostapp.com/dummy.html" rel="noreferrer">Know More</a>
                     </div>
                     </div>


                     <div>
                     <img src="https://img.icons8.com/fluent/40/000000/apple-watch.png" alt="logo"/>
                         <h1>Smart Watch</h1>
                         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun</p>
                         <div className="p-btn">
                     <a href="https://bumper-masters.000webhostapp.com/dummy.html" rel="noreferrer">Know More</a>
                     </div>
                     </div>
                

                     <div>
                     <img src="https://img.icons8.com/cotton/50/000000/chrome.png" alt="logo"/>
                         <h1>Chrome Cast</h1>
                         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun</p>
                         <br/>
                         <div className="p-btn">
                     <a href="https://bumper-masters.000webhostapp.com/dummy.html" rel="noreferrer">Know More</a>
                     </div>
                     </div>


                     <div>
                     <img
                      src="https://img.icons8.com/color/48/000000/google-assistant.png" alt="logo"/>
                         <h1>Google Assistant</h1>
                         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun</p>
                         <br/>
                         <div className="p-btn">
                     <a href="https://bumper-masters.000webhostapp.com/dummy.html" rel="noreferrer">Know More</a>
                     </div>
                     </div>


                     <div>
                     <img src="https://img.icons8.com/clouds/60/000000/google-logo.png" alt="logo"/>
                         <h1>Google WiFi</h1>
                         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun</p>
                         <br/>
                         <div className="p-btn">
                     <a href="https://bumper-masters.000webhostapp.com/dummy.html" rel="noreferrer">Know More</a>
                     </div>
                     </div>
                     
                 </div>

                 <div className="product-btn">
                     <a href="https://bumper-masters.000webhostapp.com/dummy.html" rel="noreferrer">See All product</a>
                 </div>
             </div>
         </div>



         <div id="io" style={image ?{}  :{background:"url('https://i.ibb.co/02BNj8z/googleio.jpg')no-repeat",backgroundSize:'cover'}}>
             <div className="io-content">
                 <div className="io-title">
                 <h1>GOOGLE'S I/O 2021</h1>
                 <br/>
                 <div className="io-btn">
                     <a href="https://bumper-masters.000webhostapp.com/dummy.html" rel="noreferrer">Know More</a>
                 </div>
                 </div>
             </div>
         </div>


         <div id="assistant">
             <div class="ass-c">
                    <div className="ass-title">
                        <p>The NEW UPDATED</p>
                        <h1>GOOGLE ASSISTANT</h1>
                        <p>Google Assistant is an artificial intelligence–powered virtual assistant developed by Google that is primarily available on mobile and smart home devices. </p>
                        <br/>
                        <br/>
                 <div className="ass-btn">
                     <a href="https://bumper-masters.000webhostapp.com/dummy.html" rel="noreferrer">Know More</a>
                 </div>
                 </div>
                 <div class="ass-img">
                 <img src="https://img.icons8.com/color/500/000000/google-assistant.png" alt="logo"/>
                 </div>
             </div>
         </div>


         <div id="map" style={image ?{}:{background:"url('https://i.ibb.co/pdpYmhr/googlemap.jpg')no-repeat",backgroundSize:'cover'}}>
             <div className="map-content">
                 <div className="map-title">
                     <h1>GOOGLE MAP</h1>
                     <p>Google Maps is a web mapping platform and consumer application offered by Google. It offers satellite imagery, aerial photography, street maps, 360°</p>
                     <br/>
                     <br/>
                 <div className="ass-btn">
                     <a href="https://bumper-masters.000webhostapp.com/dummy.html" rel="noreferrer">Know More</a>
                 </div>
                 </div>
             </div>
         </div>



         <div id="mail">
             <div className="mail-content">
                 <div className="mail-img">
                 <img src="https://img.icons8.com/color/1000/26e07f/gmail-new.png" alt="gmail"/>
                 </div>

                 <div className="mail-title">
                        <p>The NEW UPDATED</p>
                        <h1>GMAIL</h1>
                        <p>Gmail is a free email service provided by Google. As of 2019, it had 1.5 billion active users worldwide. A user typically accesses Gmail in a web browser or the official mobile app.</p>
                        <br/>
                        <br/>
                 <div className="ass-btn">
                     <a href="https://bumper-masters.000webhostapp.com/dummy.html" rel="noreferrer">Know More</a>
                 </div>
                 </div>
             </div>
         </div>

         <div id="search" style={image ?{}:{background:"url('https://i.ibb.co/GT3kGVh/googleS.png')",backgroundSize:'cover'}}>
             <div className="search-content">
                 <div className="search-title">
                     <h1>THE GOOGLE SEARCH</h1>
                     <br/>
                    <form>
                        <input type="search" placeholder="Search Your Answer Here"/>
                        <button type="submit">Search</button>
                    </form>
                 </div>
             </div>
         </div>


         <div id="android">
             <div className="android-content">
                 <div className="and-img">
                 <img src="https://img.icons8.com/fluent/1000/26e07f/android-os.png" alt="logo"/>
                 </div>

                 <div className="android-title">
                 <p>The NEW UPDATED</p>
                        <h1>ANDROID OS</h1>
                        <p>ndroid is a mobile operating system based on a modified version of the Linux kernel and other open source software, designed primarily for touchscreen mobile devices such as smartphones and tablets.</p>
                        <br/>
                        <br/>
                 <div className="android-btn">
                     <a href="https://bumper-masters.000webhostapp.com/dummy.html" rel="noreferrer">Know More</a>
                 </div>
                 </div>
             </div>
         </div>


         <footer>
             <div className="footer-c">
                 <div className="about">
                 <FcGoogle style={{fontSize:'30px'}}/>
                 <h2>GOOGLE</h2>
                 <br></br>
                 <p>Google LLC is an American multinational technology company that specializes in Internet-related services and products, which include online advertising</p>  
                 </div>

                 <div className="links">
                     <h3>Links</h3>
                     <p><a href="https://bumper-masters.000webhostapp.com/dummy.html" rel="noreferrer" target="_blank">Phone</a></p>
                     <p><a href="https://bumper-masters.000webhostapp.com/dummy.html" rel="noreferrer" target="_blank">Products</a></p>
                     <p><a href="https://bumper-masters.000webhostapp.com/dummy.html" rel="noreferrer" target="_blank">Android</a></p>
                     <p><a href="https://bumper-masters.000webhostapp.com/dummy.html" rel="noreferrer" target="_blank">Assistant</a></p>
                     <p><a href="https://bumper-masters.000webhostapp.com/dummy.html" rel="noreferrer" target="_blank">Gmail</a></p>
                     <p><a href="https://bumper-masters.000webhostapp.com/dummy.html" rel="noreferrer" target="_blank">Map</a></p>
                 </div>

                 <div className="support">
                     <h3>Links</h3>
                     <p><a href="https://bumper-masters.000webhostapp.com/dummy.html" rel="noreferrer" target="_blank">Service</a></p>
                     <p><a href="https://bumper-masters.000webhostapp.com/dummy.html" rel="noreferrer" target="_blank">Support</a></p>
                     <p><a href="https://bumper-masters.000webhostapp.com/dummy.html" rel="noreferrer" target="_blank">Android</a></p>
                     <p><a href="https://bumper-masters.000webhostapp.com/dummy.html" rel="noreferrer" target="_blank">Feedback</a></p>
                     <p><a href="https://bumper-masters.000webhostapp.com/dummy.html" rel="noreferrer" target="_blank">Terms</a></p>
                     <p><a href="https://bumper-masters.000webhostapp.com/dummy.html" rel="noreferrer" target="_blank">FAQ</a></p>
                 </div>

                 <div className="follow">
                     <h3>Follow Us</h3>
                     <a href="https://bumper-masters.000webhostapp.com/dummy.html" rel="noreferrer" target="_blank"><FaFacebookSquare/></a>
                     <a href="https://bumper-masters.000webhostapp.com/dummy.html" rel="noreferrer" target="_blank"><FaTwitterSquare/></a>
                     <a href="https://bumper-masters.000webhostapp.com/dummy.html" rel="noreferrer" target="_blank"><FaYoutube/></a>
                     <a href="https://bumper-masters.000webhostapp.com/dummy.html" rel="noreferrer" target="_blank"><FaInstagramSquare/></a>
                     <a href="https://bumper-masters.000webhostapp.com/dummy.html" rel="noreferrer" target="_blank"><FaLinkedin/></a>
                 </div>
             </div>
             <hr></hr>
             <p>Google Concept website Developed by Praveen Nathan C</p>
         </footer>
        </>
    )
}

export default Home
