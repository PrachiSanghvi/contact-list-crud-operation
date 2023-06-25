export const ADD_CONTACT_DATA = 'ADD_CONTACT_DATA';
export const EDIT_CONTACT_DATA = 'EDIT_CONTACT_DATA';
export const SELECTED_DATA = 'SELECTED_DATA';
export const SEARCHED_DATA = 'SEARCHED_DATA';
export const SEARCHED_VALUE = 'SEARCHED_VALUE';
export const OPEN_EDIT_FORM = 'OPEN_EDIT_FORM';
// Add contact action
export const addContactData = (payload) => ({
  type : ADD_CONTACT_DATA,payload
})

// Edit contact action
export const editContactData = (payload) => ({
  type: EDIT_CONTACT_DATA,payload
})

// Selected checkbox contact data
export const getSelectedData = (payload) => ({
  type: SELECTED_DATA,payload
})

// after search filter matched data
export const getSearchedData = (payload) => ({
  type: SEARCHED_DATA,payload
})

// Searched value saved for checking value
export const getSearchedValue = (payload) => ({
  type: SEARCHED_VALUE,payload
})

export const openEditForm = (payload) => ({
  type: OPEN_EDIT_FORM,payload
})