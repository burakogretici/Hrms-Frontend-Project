import React from "react";
import { Route } from "react-router";
import JobAdvertList from "../pages/JobAdvert/JobAdvertList";
import PositionList from "../pages/Position/PositionList";
import EmployerList from "../pages/Employer/EmployerList";
import ApplicationDetail from "../pages/JobApplication/ApplicationDetail";
import { Grid, GridColumn, GridRow } from "semantic-ui-react";
import JobAdvertDetail from "../pages/JobAdvert/JobAdvertDetail";
import Login from "../pages/Auth/Login";
import JobSeekerRegister from "../pages/Auth/JobSeeker/JobSeekerRegister";
import Filter from "./Filter";
import JobAdvertAdd from "../pages/JobAdvert/JobAdvertAdd";

export default function Dashboard() {
  return (
    <div>
      <Grid>
        <GridRow>
          <GridColumn width={4}>
            <Filter />
          </GridColumn>
          <GridColumn width={12}>
            <Route exact path="/" component={JobAdvertList} />
            <Route exact path="/jobAdverts" component={JobAdvertList} />
            <Route path="/jobAdverts/:id" component={JobAdvertDetail} />
            <Route path="/jobAdvertAdd" component={JobAdvertAdd} />
            <Route path="/positions" component={PositionList} />
            <Route path="/employers" component={EmployerList} />
            <Route path="/application" component={ApplicationDetail} />
            <Route path="/jobSeeker/register" component={JobSeekerRegister} />
            <Route path="/user/login" component={Login} />
          </GridColumn>
        </GridRow>
      </Grid>
    </div>
  );
}
