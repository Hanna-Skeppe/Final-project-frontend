/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
// import FadeIn from 'react-fade-in';
import FadeIn from '../components/lib/FadeIn';
import WineCard from '../components/WineCard';
import { fetchFavoriteWines } from '../reducers/user';
import HeaderUser from '../components/HeaderUser';
import { HomeButton } from '../components/lib/Buttons';
import { UserListWrapper } from '../components/lib/Containers';

const UserPage = () => {
  const accessToken = useSelector((store) => store.user.login.accessToken);
  const userId = useSelector((store) => store.user.login.userId);
  const favoriteWines = useSelector(
    (store) => store.user.userActions.favoriteWines,
  );
  const history = useHistory();
  const dispatch = useDispatch();

  const redirectHome = () => {
    history.push('/');
  };

  useEffect(() => {
    dispatch(fetchFavoriteWines(userId, accessToken));
  }, []);

  return (
    <>
      <HeaderUser />
      <div>
        {!accessToken && (
          <>
            <p>You must be logged in to see this page!</p>
            <HomeButton type="button" onClick={redirectHome}>
              Home
            </HomeButton>
          </>
        )}
      </div>
      <UserListWrapper>
        {accessToken &&
          favoriteWines.map((wine) => (
            <FadeIn key={wine._id}>
              <WineCard isFavorite key={wine._id} {...wine} />
            </FadeIn>
          ))}
      </UserListWrapper>
    </>
  );
};

export default UserPage;
