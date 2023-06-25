import React from 'react'
import ToolBar from './ToolBar'
import ContactHeader from './ContactHeader'
import '../styles/maincontent.scss'
import SearchContact from './SearchContact'
import AddContactForm from './AddContactForm'
import ContactList from './ContactList'
import ContactDetails from './ContactDetail'

// Main Right side content
const MainContent = () => {
  return (
    <div>
      <ToolBar />
      <ContactHeader />
      <div className='search-and-add-contact'>
        <SearchContact />
        <AddContactForm />
      </div>
      <div className='contact-table-wrapper'>
        <ContactList />
        <ContactDetails />
      </div>
    </div>
  )
}

export default MainContent