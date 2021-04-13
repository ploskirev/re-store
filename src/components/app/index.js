import React from 'react'
import withBookstoreService from '../hoc'

import './style.css'

const App = ({ bookstoreService }) => {
  console.log(bookstoreService.getBooks())
  return (
    <div>App</div>
  )
}

export default withBookstoreService()(App)