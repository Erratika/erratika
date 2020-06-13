import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css' 
import '../styles/Contact.scss'

function Contact() {
    return (
    <div id="Contact">
        <p>Please feel free to get in contact with me through the channels below!</p>
        <a href="mailto:mmarc.96@gmail.com" className="contactLink"><i className="fas fa-envelope contactImage"></i></a>
        <a href="https://www.github.com/Erratika" className="contactLink"><i className="fab fa-github contactImage"></i></a>
        <a href="https://www.linkedin.com/in/marc-murray-86a00814b/" className="contactLink"><i className="fab fa-linkedin contactImage"></i></a>
        <a href="https://www.twitter.com/vivifyerratic" className="contactLink"><i className="fab fa-twitter contactImage"></i></a>
        <a href="https://www.twitch.tv/erratikan" className="contactLink"><i className="fab fa-twitch contactImage"></i></a>
      </div>
    )
}

export default Contact;
