import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Rating } from '@material-ui/lab'
import Box from '@material-ui/core/Box'
import StarBorderIcon from '@material-ui/icons/StarBorder'
import styled from 'styled-components/macro'
// Docs for rating-component: https://material-ui.com/components/rating/

export const UserRating = ({ wineId }) => {
  const [rate, setRate] = useState(0)
  const userId = useSelector((store) => store.user.login.userId)
  const accessToken = useSelector((store) => store.user.login.accessToken)

  const handleRating = (rating) => {
    setRate(rating)
    fetch(`https://natural-wines-api.herokuapp.com/users/${userId}/rated`, {
      method: 'PUT',
      body: JSON.stringify({ userId, wineId, rating }),
      headers: { 'Content-Type': 'application/json', Authorization: accessToken }
    }).catch((err) => {
      console.log({ message: 'Could not rate wine', err: err.errors })
    })
  }

  useEffect(() => {
    if (!userId) return;
    if (userId) {
      fetch(`https://natural-wines-api.herokuapp.com/users/${userId}/rated`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', Authorization: accessToken }
      })
        .then((res) => res.json())
        .then((json) => {
          json.forEach((item) => {
            if (wineId === item.wineId) {
              setRate(item.rating)
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

