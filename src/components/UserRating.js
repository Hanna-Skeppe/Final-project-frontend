import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Rating } from '@material-ui/lab'
import Box from '@material-ui/core/Box'
import StarBorderIcon from '@material-ui/icons/StarBorder'
import styled from 'styled-components/macro'

export const UserRating = () => {
  const [rate, setRate] = useState()
  const userId = useSelector((store) => store.user.login.userId)
  const accessToken = useSelector((store) => store.user.login.accessToken)

  const handleRating = (userId, wineId, rating) => {
    setRate(rating)
    fetch(`http://localhost:8080/users/${userId}rated`, {
      method: 'PUT',
      body: JSON.stringify({ userId, wineId, rating }),
      headers: { 'Content-Type': 'application/json', Authorization: accessToken }
    }).catch((err) => {
      console.log({ message: 'Could not rate wine', err: err.errors }) // not sure about this errorhandling
    })
  }

  // https://material-ui.com/components/rating/
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
            name="customized-empty" // + wineId???
            value={rate}
            disabled={!accessToken}
            // onChange={(e, rating) => {
            //   handleRating(userId, wineId, rating)
            // }}
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