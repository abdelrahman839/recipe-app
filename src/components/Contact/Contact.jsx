import React, { useEffect } from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPaperPlane } from 'react-icons/fa'
import ContactStyle from './Contact.module.css'
import $ from 'jquery'
function Contact() {
    function sendMessage(e) {
        e.preventDefault();
    }
useEffect(()=>{
$(`.${ContactStyle.ContactForm}`).slideDown(1000,function(){
    $(`.${ContactStyle.Footer}`).slideDown(1000)
})
},[])
    return (
        <>
            <section  className= {`${ContactStyle.ContactForm} mt-85 container mx-auto mb-5`}>
                <div className={`${ContactStyle.contact_form} d-flex justify-content-center align-items-center flex-column text-center  mx-auto `}>
                    <h1 className="mb-3" >Contact Me</h1>
                    <p className="mb-3 w-75">I am interested in freelance opportunities. However, if you have other request or question, dont hesitate to contact me using below form either.</p>
                    <div className="w-75  p-2 service ">



                        <form className=" text-right ">
                            <div className="form-group ">
                                <input type="text" className="form-control mb-2 pl-2" id="exampleFormControlInput1" placeholder="Name"
                                    name="Name" />
                            </div>


                            <div className="form-group ">
                                <input type="email" className="form-control mb-2 pl-2" id="exampleFormControlInput1" placeholder="Email"
                                    name="Email" />
                            </div>


                            <div className="form-group mb-2">
                                <textarea className="form-control pl-2" id="exampleFormControlTextarea1" rows="5"
                                    placeholder="Message" name="Message"></textarea>
                            </div>
                            <button onClick={sendMessage} id="form-btn" type="submit" className="btn p-2"> <FaPaperPlane></FaPaperPlane> Send </button>


                        </form>

                    </div>

                </div>

            </section>
            <footer  className={`${ContactStyle.Footer}  w-100`}>
                <div className="container py-4 mx-auto">
                    <div className="row px-4">
                        <div className="col-md-8">
                            <h5 className="mb-3 ">ABOUT ME</h5>
                            <p className="text-muted">I am studying engineering in the software engineering <br /> department of the Egyptian Chinese University. <br />I have 7 months of experience with front-end  Web development. </p>
                        </div>
                        <div className="col-md-4">
                            <h5 className="mb-3 ">KEEP In TOUTCH </h5>
                            <p className="text-muted">Phone: +01064598472</p>
                            <p className="text-muted">E-mail: asdddghjh@gmail.com</p>
                            <p className="text-muted">abdelrahmanabdallah9800@gmail.com</p>
                            <div className=" d-flex justify-content-between align-items-center col-5  p-0">
                                <a href="https://www.facebook.com/abdelrahman.elsherif.397?_rdc=1&_rdr" target="_blank"><FaFacebookF className={`text-muted ${ContactStyle.social}`} ></FaFacebookF></a>
                                <a href="https://www.linkedin.com/in/abdelrahman-abdallah-85b5481ab/" target="_blank"><FaLinkedinIn className={`text-muted ${ContactStyle.social}`}></FaLinkedinIn></a>
                                <a href="https://www.instagram.com/abdo_code/?hl=en" target="_blank"><FaInstagram className={`text-muted ${ContactStyle.social}`}></FaInstagram></a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default Contact
