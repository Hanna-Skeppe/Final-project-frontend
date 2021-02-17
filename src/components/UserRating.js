
// Docs for rating-component: https://material-ui.com/components/rating/
import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Rating } from '@material-ui/lab'
import Box from '@material-ui/core/Box'
import StarBorderIcon from '@material-ui/icons/StarBorder'
import styled from 'styled-components/macro'

export const UserRating = ({ wineId }) => {
  const [rate, setRate] = useState()
  const userId = useSelector((store) => store.user.login.userId)
  const accessToken = useSelector((store) => store.user.login.accessToken)
  console.log('rate', rate)

  const handleRating = (rating) => {
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

  useEffect(() => {
    if (!userId) return;
    fetch(`http://localhost:8080/users/${userId}/rated`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json', Authorization: accessToken }
    })
      .then((res) => res.json()) // i need some kind of for each here?
      .then((json) => {
        setRate(json.rating)
        console.log('json', json)
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
            name="customized-empty"
            value={rate}
            disabled={!accessToken}
            onChange={(event, rating) => { handleRating(rating) }}
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