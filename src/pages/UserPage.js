import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { RedirectHomeButton } from '../components/lib/Buttons'
// Import HeaderUser here
// import NavbarUser here
// import buttons here to sort and filter list
// Show list of favorites here (if user clicks "My favorite wines" in NavbarUser )

export const UserPage = () => {
  const accessToken = useSelector((store) => store.user.login.accessToken)
  console.log('accessToken (userPage):', accessToken)
  const history = useHistory()

  const redirectHome = () => {
    history.push(`/`)
  }

  return (
    <>
      <div>
        <p>Userpage</p>
        {accessToken &&
          <p>This is the userpage! If you can see this you have an accessToken! </p>}
      </div>
      <div>
        {!accessToken &&
          <>
            <p>You must be logged in to see this page!</p>
            <RedirectHomeButton
              type="button"
              onClick={redirectHome}
            >
              Home
            </RedirectHomeButton>
          </>}
      </div>
    </>
  )
}