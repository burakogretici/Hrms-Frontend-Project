import React,{useState} from "react";
import {Container,Menu } from "semantic-ui-react";
import { useHistory } from "react-router";
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";
import Application from "./Application";
import { NavLink } from "react-router-dom";

export default function Navi() {
  const [isAuthenticated, setIsAuthenticated] = useState(true)
  const history= useHistory()

  function handleSignOut(){
    setIsAuthenticated(false)
    history.push("/")
    
  }

  function handleSignIn() {
    setIsAuthenticated(true)
  }

  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item name="Hrms" />
          <Menu.Item name="Job Adverts" as={NavLink} to="/JobAdverts"/>
          <Menu.Menu position="right">
            <Application/>
            {isAuthenticated?<SignedIn signOut={handleSignOut}/>:<SignedOut signIn={handleSignIn}/>}
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
