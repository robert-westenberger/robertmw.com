import React from 'react';
import { Link } from "react-router-dom";
import SearchForm from "../SearchForm/searchForm";
import LoginForm from "../LoginForm/loginForm";
import { Button } from '../Button/button';
import axios from "../../utils/axios";
import {
    HeaderComponent,
    SearchAndMenu,
    Bottom,
} from "./header.styles";

const LogoutButton = ({setUserIsAuthenticated}) => (
  <Button onClick={() => {
      axios.post("/logout").then(() => {
          setUserIsAuthenticated(false);
      });
  }}>
      Logout
  </Button>
);
const LoginSection = ({ userIsAuthenticated, setUserIsAuthenticated }) => {
    return userIsAuthenticated ?
      <LogoutButton setUserIsAuthenticated={setUserIsAuthenticated} /> :
      <LoginForm setUserIsAuthenticated={setUserIsAuthenticated} />;
};
function Header({ setUserIsAuthenticated, userIsAuthenticated }) {
    return (<HeaderComponent>
        {userIsAuthenticated ? <h1>True</h1> : <h1>FALSE</h1>}

        <SearchAndMenu>
            <SearchForm />
            <LoginSection
              userIsAuthenticated={userIsAuthenticated}
              setUserIsAuthenticated={setUserIsAuthenticated}
            />
          <Link to="/edit">Edit</Link>
        </SearchAndMenu>
        <Bottom>

        </Bottom>
    </HeaderComponent>);
}

export default Header;
