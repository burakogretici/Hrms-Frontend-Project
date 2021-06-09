import React from "react";
import { Button, Container, Dropdown, Menu } from "semantic-ui-react";

export default function Navi() {
  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item name="home" />
          <Menu.Menu position="right">
            <Dropdown item text="Employer">
              <Dropdown.Menu >
                <Dropdown.Item>Sign Up</Dropdown.Item>
                <Dropdown.Item>Sign In</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Menu.Item  >
              <Button color="red">Sign Up</Button>
              <Button color="green">Sign In</Button>
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
