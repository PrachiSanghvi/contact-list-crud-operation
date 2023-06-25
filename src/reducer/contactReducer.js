import { ADD_CONTACT_DATA, EDIT_CONTACT_DATA, SEARCHED_DATA, SEARCHED_VALUE, SELECTED_DATA } from "../action/contactAction";
import contactList from "../db";
const initialContactState = {
  list: contactList?.contacts,
  selectedData: {
    0: contactList?.contacts[0]
  },
  searchedData: [],
  searchedValue: ''
}

export const FetchContactDetail = (state = initialContactState, action) => {
  // Storeing contact detail
  switch (action.type) {
    // Add contact reducer
    case ADD_CONTACT_DATA:
      return {
        ...state,
        list: [
          ...state.list, {
            ...action.payload
          }
        ]
      }
      // Edit contact reducer
    case EDIT_CONTACT_DATA:
      return {
        ...state,
        list: state.list.map((contact) => {
          if (+contact.id === +action.payload.id) {
            return { ...action.payload }
          } else {
            return contact;
          }
        })
      }
      // Selected data reducer
    case SELECTED_DATA:
      return {
        ...state,
        selectedData: state.list.filter(l => {
          return l.name === action.payload[0].name
        })
      }
      // searched data reducer
    case SEARCHED_DATA:
      return {
        ...state,
        searchedData: action.payload
      }
      // Searched value reducer
    case SEARCHED_VALUE:
      return {
        ...state,
        searchedValue: action.payload
      }
    default:
      return state;
  }
}