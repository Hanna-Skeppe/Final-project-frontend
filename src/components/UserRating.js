/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Rating } from '@mui/material';
import Box from '@mui/material/Box';
// import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarIcon from '@mui/icons-material/Star'; // Star-ikonen från @mui/icons-material
import StarBorderIcon from '@mui/icons-material/StarBorder';
import styled from 'styled-components/macro';
// Docs for rating-component: https://material-ui.com/components/rating/

const UserRating = ({ wineId }) => {
  const [rate, setRate] = useState(0);
  const userId = useSelector((store) => store.user.login.userId);
  const accessToken = useSelector((store) => store.user.login.accessToken);

  const handleRating = (rating) => {
    setRate(rating);
    fetch(`https://natural-wines-api.onrender.com/users/${userId}/rated`, {
      method: 'PUT',
      body: JSON.stringify({ userId, wineId, rating }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: accessToken,
      },
    }).catch((err) => {
      console.error({ message: 'Could not rate wine', err: err.errors });
    });
  };

  useEffect(() => {
    if (!userId) return;
    if (userId) {
      fetch(`https://natural-wines-api.onrender.com/users/${userId}/rated`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: accessToken,
        },
      })
        .then((res) => res.json())
        .then((json) => {
          json.forEach((item) => {
            if (wineId === item.wineId) {
              setRate(item.rating);
            }
          });
        });
    }
  }, [wineId, userId, accessToken]);

  return (
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
          name={`customized-empty${wineId}`} // Identifierar betyget för varje vin
          value={accessToken ? rate : 0} // Visar betyg endast om användaren är inloggad
          disabled={!accessToken} // Gör betygsättningen inaktiverad om användaren inte är inloggad
          onChange={(event, rating) => {
            handleRating(rating); // Hanterar betygsättningen
          }}
          emptyIcon={
            <StarBorderIcon
              style={{ color: 'rgba(255, 255, 255, 0.8)', fill: '#495867' }} // Styr utseendet på den tomma stjärnan
            />
          }
          icon={
            <StarIcon
              style={{ color: '#ff9800' }} // Färgen på den fyllda stjärnan
            />
          }
        />
        {/* <Rating
          name={`customized-empty${wineId}`} // If I remove wineId it breaks (can't rate)
          value={accessToken ? rate : 0} // if not logged in the rating does not show
          disabled={!accessToken}
          onChange={(event, rating) => {
            handleRating(rating);
          }} // 'event' is not used, but it doesn't work if I remove it.
          emptyIcon={
            <StarIcon
              style={{ color: 'rgba(255, 255, 255, 0.8)', fill: '#495867' }}
            />
          }
        /> */}
      </Box>
    </RatingButtonContainer>
  );
};

UserRating.propTypes = {
  wineId: PropTypes.string.isRequired,
};

export default UserRating;

const RatingButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
