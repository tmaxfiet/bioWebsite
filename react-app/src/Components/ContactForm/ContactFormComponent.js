import React from 'react';
import './ContactFormComponent.css';

class ContactFormComponent extends React.Component {
    render() {
        return (
            <div id="contact-form-container">
                <div id="contact-title"> Get In Touch </div>
                <div id="contact-text"> 
                    Want to connect and discuss a current project need or idea? Interested in learning more
                    about my projects? Feel free to reach out at
                    <a id="mail-link" href="mailto:taylorjmaxfield@gmail.com"> taylorjmaxfield@gmail.com</a>! If you are a 
                    LinkedIn extraordinaire and prefer that platform, please send me a connection request!
                </div>
            </div>
        )
    }
}

export default ContactFormComponent;