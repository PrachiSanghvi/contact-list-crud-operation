import React from 'react'
import { FaAddressBook } from "react-icons/fa";

// Contact form header
const ContactHeader = () => {
  return (
    <div className='contact-list-header'>
      <div className='contact-icon'>
        <FaAddressBook style={{color: '#FE6B8B', fontSize: '30px', background: '#FFFFFF'}} />
      </div>
      <div className='contact-title-wrapper'>
        <span className='contact-title'>Contacts</span>
        <span className='contact-subtitle'>Find the close once and just call them...</span>
      </div>
  </div>
  )
}

export default ContactHeader