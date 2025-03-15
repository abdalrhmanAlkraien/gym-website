import React, { useRef } from 'react'
import './Email.css'
import emailjs from '@emailjs/browser';
const Email = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
            publicKey: 'YOUR_PUBLIC_KEY',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };

  return (
    <div className="email">

        <div className="email-header">

            <div className="header-1">
                <div></div>
                <span className='storck-text'>Ready to</span>
                <span> Level up</span>
            </div>

            <div className="header-2">
                <span>your body </span>
                <span className='storck-text'>with us?</span>   
            </div>
        </div>

        <div className="subscription">

            <form ref={form} action="" className='email-form' onSubmit={sendEmail}>
                <input type='email' name='user_email' placeholder='Enter your email'/> 
                <button className='btn btn-j'>Join now</button>
            </form>
        </div>
    </div>
  )
}

export default Email
