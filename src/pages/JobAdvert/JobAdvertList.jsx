import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import { Icon, Menu, Table } from "semantic-ui-react";
import JobAdvertService from "../../services/jobAdvertService";
import './JobAdvertList.css';

const colors = ["red"];

export default function JobAdvertList() {
  const [jobAdvertisements, setJobAdverts] = useState([]);

  useEffect(() => {
    let jobAdvertService = new JobAdvertService();
    jobAdvertService
      .getJobAdverts()
      .then((result) => setJobAdverts(result.data.data));
  }, []);

  return (
    <div className="jobAdvertList">
      {colors.map((color) => (
        <Table color={color} key={color}>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Position</Table.HeaderCell>
              <Table.HeaderCell>Description</Table.HeaderCell>
              <Table.HeaderCell>Employer</Table.HeaderCell>
              <Table.HeaderCell>City</Table.HeaderCell>
              <Table.HeaderCell>Quantity</Table.HeaderCell>
              <Table.HeaderCell>Min salary</Table.HeaderCell>
              <Table.HeaderCell>Max salary</Table.HeaderCell>
              <Table.HeaderCell>Creation date</Table.HeaderCell>
              <Table.HeaderCell>Deadline</Table.HeaderCell>
              <Table.HeaderCell>Active</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {jobAdvertisements.map((jobAdvertisement) => (
              <Table.Row key={jobAdvertisement.id}>
                <Table.Cell><Link to={'/jobAdverts/ $ {jobAdvertisement.position.name}'}>{jobAdvertisement.position.name}</Link></Table.Cell>
                <Table.Cell>{jobAdvertisement.description}</Table.Cell>
                <Table.Cell>{jobAdvertisement.employer.companyName}</Table.Cell>
                <Table.Cell>{jobAdvertisement.city.name}</Table.Cell>
                <Table.Cell>{jobAdvertisement.quantity}</Table.Cell>
                <Table.Cell>{jobAdvertisement.minSalary}</Table.Cell>
                <Table.Cell>{jobAdvertisement.maxSalary}</Table.Cell>
                <Table.Cell>{jobAdvertisement.creationDate}</Table.Cell>
                <Table.Cell>{jobAdvertisement.deadline}</Table.Cell>
                <Table.Cell>{jobAdvertisement.isActive}</Table.Cell>
              
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
