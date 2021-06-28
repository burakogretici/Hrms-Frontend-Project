import React, { useState, useEffect } from "react";
import { Menu, Button, Form, Checkbox } from "semantic-ui-react";
import CityService from "../services/cityService";
import WayOfWorkingService from "../services/wayOfWorkingService";
import WorkingTimeService from "../services/workingTimeService";

export default function Filter() {
  const [cities, setCities] = useState([]);
  useEffect(() => {
    let cityService = new CityService();
    cityService.getCities().then((result) => {
      setCities(result.data.data);
    });
  }, []);

  const [wayOfWorkings, setWayOfWorkings] = useState([]);
  useEffect(() => {
    let wayOfWorkingService = new WayOfWorkingService();
    wayOfWorkingService.getWaysOfWorking().then((result) => {
      setWayOfWorkings(result.data.data);
    });
  }, []);
  

  const [workingTimes, setWorkingTimes] = useState([]);
  useEffect(() => {
    let workingTimeService = new WorkingTimeService();
    workingTimeService.getWorkingTimes().then((result) => {
      setWorkingTimes(result.data.data);
    });
  }, []);

  return (
    <div className="filter">
      <Menu vertical fluid style={{ borderRadius: "10px" }}>
        <Menu.Item
          style={{ border: "2px solid #f2f2f2", borderRadius: "10px" }}
        >
          <div>
          <Menu.Header>City</Menu.Header>
          <Menu.Menu>
            <Form style={{ border: "1px solid #f5f5f5" }}>
              <Form.Field
                style={{
                  height: 250,
                  overflowY: "scroll",
                  overflowX: "hidden",
                  display: "grid",
                  margin: "auto",
                }}
              >
                
                {cities.map((city) => (
                  <Checkbox
                    style={{ marginLeft: "15px" }}
                    name="checkboxRadioGroup"
                    label={city.name}
                    key={city.id}
                    value={city.id}
                  />
                  
                ))}
                
              </Form.Field>
              
            </Form>
            
          </Menu.Menu>
          </div>
        </Menu.Item>

        <Menu.Item
          style={{ border: "2px solid #f2f2f2", borderRadius: "10px" }}
        >
          <Menu.Header>Working Time</Menu.Header>
          <Menu.Menu>
            <Form style={{ border: "1px solid #f5f5f5" }}>
              <Form.Field
                style={{
                  height: 50,
                  overflowY: "auto",
                  overflowX: "hidden",
                  display: "grid",
                  margin: "auto",
                }}
              >
                {workingTimes.map((workingTime) => (
                  <Checkbox
                    style={{ marginLeft: "15px" }}
                    name="checkboxRadioGroup"
                    label={workingTime.name}
                    key={workingTime.id}
                    value={workingTime.id}
                  />
                ))}
              </Form.Field>
            </Form>
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item
          style={{ border: "2px solid #f2f2f2", borderRadius: "10px" }}
        >
          <Menu.Header>Way of Working</Menu.Header>
          <Menu.Menu>
            <Form style={{ border: "1px solid #f5f5f5" }}>
              <Form.Field
                style={{
                  height: 150,
                  overflowY: "auto",
                  overflowX: "hidden",
                  display: "grid",
                  margin: "auto",
                }}
              >
                {wayOfWorkings.map((wayOfWorking) => (
                  <Checkbox
                    style={{ marginLeft: "15px" }}
                    name="checkboxRadioGroup"
                    label={wayOfWorking.name}
                    key={wayOfWorking.id}
                    value={wayOfWorking.id}
                  />
                ))}
              </Form.Field>
            </Form>
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item>
          <Button basic>
            Filter <i aria-hidden="true" className="search icon"></i>
          </Button>
        </Menu.Item>
      </Menu>
    </div>
  );
}
