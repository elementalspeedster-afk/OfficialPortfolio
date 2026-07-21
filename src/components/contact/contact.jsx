import React from 'react'
import'./contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from "react-icons/ri";
import {BsWhatsapp} from "react-icons/bs";
import {useRef} from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion'


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_2jan386',
      'template_360vdlr',
      form.current,
      'J3t-SX2vrzXx7vEQu'
    ).then(
      (result) => {
        console.log('SUCCESS!', result.text);
        e.target.reset();
      },
      (error) => {
        console.error('FAILED...', error.text);
      }
    );
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      
      <motion.div
        className="container contact__container"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>yousefcui@gmail.com</h5>
            <a href="mailto:yousefcui@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Yousef Cui</h5>
            <a href="https://www.facebook.com/messages/t/yousef.cui" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+639212049126</h5>
            <a href="https://api.whatsapp.com/send?phone+639212049126" target="_blank">Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </motion.div>
    </section>
  )
}

export default Contact