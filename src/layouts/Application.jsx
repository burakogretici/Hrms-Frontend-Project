import React from "react";
import { NavLink } from "react-router-dom";
import { Dropdown } from "semantic-ui-react";

export default function Application() {
  return (
    <div>
      <Dropdown item text="Applications">
        <Dropdown.Menu>
          <Dropdown.Item>Job Adverts</Dropdown.Item>
          <Dropdown.Item>Employers</Dropdown.Item>

          <Dropdown.Divider/>
          <Dropdown.Item as={NavLink} to ="/application">Go to applications</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
