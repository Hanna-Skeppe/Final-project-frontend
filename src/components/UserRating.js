import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Rating } from '@material-ui/lab'
import Box from '@material-ui/core/Box'
import StarBorderIcon from '@material-ui/icons/StarBorder'
import styled from 'styled-components/macro'
// Docs for rating-component: https://material-ui.com/components/rating/

// This ratings-component does not fully work yet.
export const UserRating = ({ wineId }) => {
  const [rate, setRate] = useState()
  const userId = useSelector((store) => store.user.login.userId)
  const accessToken = useSelector((store) => store.user.login.accessToken)
  console.log('rate', rate)

  const handleRating = (rating) => { // This works: the backend updates properly.
    setRate(rating)
    console.log(rating)
    fetch(`http://localhost:8080/users/${userId}/rated`, {
      method: 'PUT',
      body: JSON.stringify({ userId, wineId, rating }),
      headers: { 'Content-Type': 'application/json', Authorization: accessToken }
    }).catch((err) => {
      console.log({ message: 'Could not rate wine', err: err.errors }) // not sure about this errorhandling
    })
  }

  // This does not work yet. I don't get the ratings to display in frontend.
  // I would LOVE to get some pointers on how to solve it in the code-review if possible.
  useEffect(() => {
    if (!userId) return;
    fetch(`http://localhost:8080/users/${userId}/rated`, { 
      method: 'GET',
      headers: { 'Content-Type': 'application/json', Authorization: accessToken }
    })
      .then((res) => res.json())
      .then((json) => {
        json.forEach((item) => {
          if (item.wineId === wineId) {
            setRate(item.rating)
          }
        })
      //   setRate(json.rating)
      //   console.log('json', json)
      })
  }, [wineId, userId, accessToken])

  return (
    <>
      <RatingButtonContainer>
        <Box
          component="fieldset"
          mb={3}
          borderColor="transparent"
          marginBottom="0px"
          width="100px"
        >
          <Rating
            name={"customized-empty" + wineId} // If I remove wineId it breaks (can't rate) // In frontend this has the same wineId on all wines.
            value={rate} // The value in frontend is not correct when checking this element. It has the value of "1" on all(?) wines.
            disabled={!accessToken}
            onChange={(event, rating) => { handleRating(rating) }} // how should this onChange look like? 'event' is not used, but it doesn't work if I remove it.
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