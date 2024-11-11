import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

import { logoutUser } from '../reducers/user';
import { StyledBurger, LogoutButton } from './lib/Buttons';
import { HamburgerWrap } from './lib/Containers';

export const HamburgerMenu = ({ open, setOpen }) => {
  const name = useSelector((store) => store.user.login.name);
  const accessToken = useSelector((store) => store.user.login.accessToken);
  const userId = useSelector((store) => store.user.login.userId);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogout = (event) => {
    event.preventDefault();
    dispatch(logoutUser(accessToken));
    history.push('/');
  };

  return (
    <StyledMenu open={open}>
      <Link to="/" onClick={() => setOpen(!open)}>
        Home
      </Link>
      <Link to="/producers" onClick={() => setOpen(!open)}>
        Wine Producers
      </Link>
      {!accessToken && (
        <>
          <Link to="/login" onClick={() => setOpen(!open)}>
            Login
          </Link>
          <Link to="/register" onClick={() => setOpen(!open)}>
            Register
          </Link>
        </>
      )}
      {accessToken && (
        <>
          <LogoutButton type="submit" onClick={handleLogout}>
            Logout
          </LogoutButton>
          <Link
            to={`/users/${userId}/collection`}
            onClick={() => setOpen(!open)}
          >
            {name}&apos;s Page
          </Link>
        </>
      )}
    </StyledMenu>
  );
};

HamburgerMenu.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};

const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

Burger.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};

export const Hamburger = () => {
  const [open, setOpen] = useState(false);
  const node = React.useRef();

  return (
    <HamburgerWrap>
      <div ref={node}>
        <Burger open={open} setOpen={setOpen} />
        <HamburgerMenu open={open} setOpen={setOpen} />
      </div>
    </HamburgerWrap>
  );
};

export const StyledMenu = styled.nav`
  background: #44515f;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  left: 0;
  padding: 1.5rem;
  position: absolute;
  align-items: flex-start;
  top: 0;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  transition: transform 0.3s ease-in-out;
  z-index: 15;
  width: 75%;
  @media (max-width: 500px) {
    width: 100%;
  }
  a {
    color: #fff;
    font-family: 'Overpass', sans-serif;
    font-size: 2rem;
    font-weight: bold;
    letter-spacing: 0.2rem;
    padding: 1.3rem 0;
    text-decoration: none;
    transition: color 0.3s linear;
    &:hover {
      color: #ce796b;
    }
  }
`;
