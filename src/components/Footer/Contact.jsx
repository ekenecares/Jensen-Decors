import { useState } from "react";
import { Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import './contact.css'

function GoogleMaps(){
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.4104426888416!2d3.6242335755995576!3d6.469578793522146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf979fee11457%3A0xa5d6185fb1770461!2sAptech%20Computer%20Education%20Ajah%20Centre!5e0!3m2!1sen!2sng!4v1713441823355!5m2!1sen!2sng"

  return (
    <iframe src={mapUrl} width="80%" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    
  )
}

function Contact() {
  const nameRegex = /^[a-zA-Z]{2,}$/;
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const [name, setName] = useState('')
  const [email, setEmail] = useState('');
  const [isNameValid, setIsNameValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  
  const handleEmailChange = e => {
      const newEmail = e.target.value;
      setEmail(newEmail);
      setIsEmailValid(emailRegex.test(newEmail));
    };

  const handleNameChange = e => {
    const newName = e.target.value
    setName(newName)
    setIsNameValid(nameRegex.test(newName))
    
  }


  return (
    <div className="contact">
      <div className="contact__map">
        <GoogleMaps/>
      </div>  
      <div className="contact-us">
        <div className="contact__form">
          <h2>Contact Us</h2>
          <form onSubmit={e => e.preventDefault()}>
              <div className="input-field">
                <input autoFocus={true} value={name} onChange={handleNameChange} type="text" placeholder="Enter Your Name"/>
            
                {!isNameValid && <p className="error">Please name should be at least 2 characters.</p>}
              </div>
        
              <div className="input-field">
                <input type="email" value={email} onChange={handleEmailChange} placeholder="Enter Your Email"/>
                {!isEmailValid && <p className="error">Please enter correct format. e.g example@mail.com</p>}
              </div>
            <textarea rows="10" placeholder="Message"></textarea>
            <button disabled={true}>Submit</button>
          </form>
        </div>
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>We would love to hear from you.</p>
          <div className="contact-box">
            <div>
              <span><FaPhoneAlt/></span>
              <p>inp </p>
            </div>

            <div>
              <span><FaLocationDot/></span>
              <p>Aptech Ajah Centre.Plot 22, Yomi Ajetunmobi Avenue, Off Alfa Busstop, Sangotedo.</p>
            </div>

            <div>
              <span><MdOutlineEmail/></span>
              <p><Link to="mailto:abbasabubakar05@gmail.com">jensendecor@gmail.com</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
