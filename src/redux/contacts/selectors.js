import { createSelector } from "@reduxjs/toolkit"
import { selectorFilter } from "../filters/selectors"

export const  selectLoading = state => {
  return state.contacts.loading
}

export const selectContacts = state => {
  return state.contacts.items
}
export const selectFilteredContacts = createSelector(
  [selectContacts, selectorFilter], (items, name) => {
    if (!name) {
      return items
    }
    return items.filter(user =>
    user.name.toLowerCase().includes(name.toLowerCase())
  )
   }

)