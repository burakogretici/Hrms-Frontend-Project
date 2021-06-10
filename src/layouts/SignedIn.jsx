import React from "react";
import { Menu, Image, Dropdown } from "semantic-ui-react";

export default function SignedIn({signOut}) {
  return (
    <div>
      <Menu.Item>
        <Image avatar spaced="right"src="https://pbs.twimg.com/profile_images/1063446874819084291/hfVfl2bq_400x400.jpg"/>
        <Dropdown pointing="top left" text="Burak">
          <Dropdown.Menu>
            <Dropdown.Item text="My information" icon="info" />
            <Dropdown.Item text="Help" icon="help" />
            <Dropdown.Item text="Settings" icon="setting" />
            <Dropdown.Item onClick={signOut} text="Sign out" icon="sign-out" />
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </div>
  );
}
