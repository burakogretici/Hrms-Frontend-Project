import React from "react";
import { Menu } from 'semantic-ui-react'

export default function Categories() {
  return (
    <div>
      <Menu pointing secondary vertical>
        <Menu.Item name="Job Adverts" />
        <Menu.Item name="Positions" />
        <Menu.Item name="Employers" />
      </Menu>
    </div>
  );
}
