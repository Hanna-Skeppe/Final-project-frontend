import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Rating } from '@material-ui/lab'
import Box from '@material-ui/core/Box'
import StarBorderIcon from '@material-ui/icons/StarBorder'
import styled from 'styled-components/macro'
// Docs for rating-component: https://material-ui.com/components/rating/

export const UserRating = ({ wineId }) => {
  const [rate, setRate] = useState(0) // Changed this from empty to 0 and setRate now seems to work (no error about uncontrolled UI-component in console)
  const userId = useSelector((store) => store.user.login.userId)
  const accessToken = useSelector((store) => store.user.login.accessToken)

  const handleRating = (rating) => { // This works: the backend updates properly.
    setRate(rating)
    console.log(rating)
    fetch(`https://natural-wines-api.herokuapp.com/users/${userId}/rated`, {
      method: 'PUT',
      body: JSON.stringify({ userId, wineId, rating }),
      headers: { 'Content-Type': 'application/json', Authorization: accessToken }
    }).catch((err) => {
      console.log({ message: 'Could not rate wine', err: err.errors }) // not sure about this errorhandling
    })
  }

  // UPDATE: Now the rating seems to display properly in the frontend as well!
  // Left to do: Make a 'tab' on the userpage to see all their rated wines.
  // This does not work yet. I don't get the ratings to display in frontend.
  // I would LOVE to get some pointers on how to solve it in the code-review if possible.
  useEffect(() => {
    if (!userId) return;
    if (userId) {
      fetch(`https://natural-wines-api.herokuapp.com/users/${userId}/rated`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', Authorization: accessToken }
      })
        .then((res) => res.json())
        .then((json) => {
          // console.log(json, wineId)
          json.forEach((item) => {
            // console.log('item.wineId', item.wineId, 'item.rating', item.rating)
            if (wineId === item.wineId) {
              console.log(`${wineId} is rated ${item.rating}`) // Logs out only on the rated wines, so seems to work.
              setRate(item.rating) // now this also seems to work. rating is shown for rated wines for logged in user.
            }
          })
        })
    }

  }, [wineId, userId, accessToken])

  return (
    <>
      <RatingButtonContainer>
        <Box
          component="fieldset"
          mb={3}
          borderColor="transparent"
          margin="0px"
          marginBottom="10px"
          width="100px"
          padding="4px"
          paddingLeft="0px"
        >
          <Rating
            name={"customized-empty" + wineId} // If I remove wineId it breaks (can't rate)
            value={accessToken ? rate : 0} // if not logged in the rating does not show
            disabled={!accessToken}
            onChange={(event, rating) => { handleRating(rating) }} // 'event' is not used, but it doesn't work if I remove it.
            emptyIcon={<StarBorderIcon style={{ color: 'rgba(255, 255, 255, 0.8)', fill: '#495867' }} />}
          />
        </Box>
      </RatingButtonContainer>
    </>
  )
}

const RatingButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
`

