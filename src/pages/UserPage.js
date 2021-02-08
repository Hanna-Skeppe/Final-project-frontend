import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { WineCard } from 'components/WineCard'
import { fetchFavoriteWines } from '../reducers/user'
import { HeaderUser } from '../components/HeaderUser'
import { RedirectHomeButton } from '../components/lib/Buttons'

// import NavbarUser here (links to show favorites)
// Show list of favorites here (if user clicks "My favorite wines" in NavbarUser )

export const UserPage = () => {
  const accessToken = useSelector((store) => store.user.login.accessToken)
  const userId = useSelector((store) => store.user.login.userId)
  const favoriteWines = useSelector((store) => store.user.userActions.favoriteWines)
  const history = useHistory()
  const dispatch = useDispatch()
  console.log('accessToken (userPage):', accessToken)

  const redirectHome = () => {
    history.push(`/`)
  }

  // GET favoritewines and dispatch to store:
  useEffect(() => {
    dispatch(fetchFavoriteWines(userId, accessToken))
  }, [])
  console.log('favoriteWines, userpage', favoriteWines)

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
            isFavorite="true"
            key={wine._id}
            {...wine} />
        ))}
      </section>
    </>
  )
}