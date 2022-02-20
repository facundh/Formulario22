import React, { useState } from "react";
import {
  Container,
  Wrapper,
  Menu,
  MenuItem,
  MenuItemLink,
  MobileIcon,
} from "./NavbarElement.js";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons";
import { AuthConsumer } from "../../context/Auth/AuthProvider";

const Navbar = () => {
  const { user, logout } = AuthConsumer();
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <Container>
      <Wrapper>
        <IconContext.Provider
          value={{
            style: {
              fontSize: "1.5em",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
            },
          }}
        >
          <MobileIcon onClick={() => setShowMobileMenu(!showMobileMenu)}>
            {showMobileMenu ? <FaTimes /> : <FaBars />}
          </MobileIcon>

          <Menu open={showMobileMenu}>
            {user ? (
              <>
                <MenuItem>
                  <MenuItemLink to="/home"> Home</MenuItemLink>
                </MenuItem>
                <MenuItem>
                  <MenuItemLink to="/formulario"> Formulario</MenuItemLink>
                </MenuItem>
                <MenuItem>
                  <MenuItemLink to="/" onClick={logout}>
                    Logout
                  </MenuItemLink>
                </MenuItem>
              </>
            ) : (
              <>
                <MenuItem>
                  <MenuItemLink to="/"> Sign Up </MenuItemLink>
                </MenuItem>
                <MenuItem>
                  <MenuItemLink to="/registro"> Sign In </MenuItemLink>
                </MenuItem>
              </>
            )}
          </Menu>
        </IconContext.Provider>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
