import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { WineCard } from 'components/WineCard'
import { user } from '../reducers/user'
import { HeaderUser } from '../components/HeaderUser'
import { RedirectHomeButton } from '../components/lib/Buttons'
// const GET_USER_FAVORITES_URL = `http://localhost:8080/users/${_id}/favorites`
// import NavbarUser here (links to show favorites)
// Show list of favorites here (if user clicks "My favorite wines" in NavbarUser )

export const UserPage = () => {
  const accessToken = useSelector((store) => store.user.login.accessToken)
  const userId = useSelector((store) => store.user.login.userId)
  console.log('accessToken (userPage):', accessToken)
  const history = useHistory()
  const dispatch = useDispatch()
  const [favoriteWines, setFavoriteWines] = useState([])

  const redirectHome = () => {
    history.push(`/`)
  }

  // GET favoritewines and dispatch to store:
  useEffect(() => {
    fetch(`http://localhost:8080/users/${userId}/favorites`, {
      method: 'GET',
      headers: { Authorization: accessToken }
    })
      .then((res) => {
        if (res.ok) {
          return res.json()
        }
        throw new Error(
          'Could not get Wines'
        )
      })
      .then((json) => {
        setFavoriteWines(json)
        dispatch(user.actions.setFavoriteWines(json))
      })
  }, [userId, accessToken, dispatch])
  console.log(favoriteWines)

  return (
    <>
      <HeaderUser />
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
      <section>
        {accessToken && favoriteWines.map((wine) => (
          <WineCard
            key={wine._id}
            {...wine} />
        ))}
      </section>
      <div>
        {accessToken &&
          <p>This is the userpage! If you can see this you have an accessToken! </p>}
      </div>
    </>
  )
}