import React from "react";
import Categories from "./Categories";
import JobAdvertList from "../pages/JobAdvert/JobAdvertList";
import PositionList from "../pages/Position/PositionList";
import EmployerList from "../pages/Employer/EmployerList";

import { Grid, GridColumn, GridRow } from "semantic-ui-react";

export default function Dashboard() {
  return (
    <div>
      <Grid>
        <GridRow>
          <GridColumn width={4}>
            <Categories/>
          </GridColumn>
          <GridColumn width={12}>
            <EmployerList/>
          </GridColumn>
        </GridRow>
      </Grid>
    </div>
  );
}
