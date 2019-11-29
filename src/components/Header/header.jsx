import React from 'react';
import SearchForm from "../SearchForm/searchForm";
import LoginForm from "../LoginForm/loginForm";
import {
    HeaderComponent,
    SearchAndMenu,
    Bottom,
} from "./header.styles";

function Header() {
    return (<HeaderComponent>
        <SearchAndMenu>
            <SearchForm />
            <LoginForm />
        </SearchAndMenu>
        <Bottom>

        </Bottom>
    </HeaderComponent>);
}

export default Header;
