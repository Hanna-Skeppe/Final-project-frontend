import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { logoutUser } from '../reducers/user';
import { LogInOutButton } from './lib/Buttons';

const Logout = () => {
  const accessToken = useSelector((store) => store.user.login.accessToken);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogout = (event) => {
    event.preventDefault();
    dispatch(logoutUser(accessToken));
    history.push('/');
  };

  return (
    <LogInOutButton
      activeClassName={{ color: '#C9C4C4', textDecoration: 'underline' }}
      type="submit"
      onClick={handleLogout}
    >
      Logout
    </LogInOutButton>
  );
};

export default Logout;
