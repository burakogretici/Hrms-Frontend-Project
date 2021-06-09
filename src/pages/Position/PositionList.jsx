import React, { useState, useEffect } from "react";
import { Icon, Label, Menu, Table } from "semantic-ui-react";
import PositionService from "../../services/positionService";

const colors = ["red"];

export default function PositionList() {
  const [position, setPositions] = useState([]);

  useEffect(() => {
    let positionService = new PositionService();
    positionService
      .getPositions()
      .then((result) => setPositions(result.data.data));
  }, []);

  return (
    <div>
      {colors.map((color) => (
        <Table color={color} key={color}>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Position</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {position.map((position) => (
              <Table.Row key={position.id}>
                <Table.Cell>{position.name}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>

          <Table.Footer>
            <Table.Row>
              <Table.HeaderCell colSpan="3">
                <Menu floated="right" pagination>
                  <Menu.Item as="a" icon>
                    <Icon name="chevron left" />
                  </Menu.Item>
                  <Menu.Item as="a">1</Menu.Item>
                  <Menu.Item as="a">2</Menu.Item>
                  <Menu.Item as="a">3</Menu.Item>
                  <Menu.Item as="a">4</Menu.Item>
                  <Menu.Item as="a" icon>
                    <Icon name="chevron right" />
                  </Menu.Item>
                </Menu>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </Table>
      ))}
    </div>
  )
}
