import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components/macro';

import { NavbarContainer } from './lib/Containers';
import { NavSpan } from './lib/Text';
import { NavbarLink } from './lib/Links';
import PopoverLogin from './PopoverLogin';
import Logout from './Logout';
import { Hamburger } from './Hamburger';

const NavbarMain = () => {
  const accessToken = useSelector((store) => store.user.login.accessToken);
  const userId = useSelector((store) => store.user.login.userId);
  const name = useSelector((store) => store.user.login.name);

  return (
    <NavbarContainer>
      <Nav>
        <>
          <Hamburger />
          <NavbarLink
            to="/"
            exact
            activeStyle={{ color: '#C9C4C4', textDecoration: 'underline' }}
          >
            Home
          </NavbarLink>
          <NavSpan>|</NavSpan>
          <NavbarLink
            to="/producers"
            exact
            activeStyle={{ color: '#C9C4C4', textDecoration: 'underline' }}
          >
            Wine Producers
          </NavbarLink>
        </>
        {!accessToken && (
          <>
            <NavSpan>|</NavSpan>
            <PopoverLogin />
          </>
        )}
        {accessToken && (
          <>
            <NavSpan>|</NavSpan>
            <Logout />
            <NavSpan>|</NavSpan>
            <NavbarLink
              to={`/users/${userId}/collection`}
              activeStyle={{ color: '#C9C4C4', textDecoration: 'underline' }}
            >
              {name}&apos;s Page
            </NavbarLink>
          </>
        )}
      </Nav>
    </NavbarContainer>
  );
};

export default NavbarMain;

const Nav = styled.nav`
  top: 0px;
  margin: 0px;
  overflow: hidden;
`;
