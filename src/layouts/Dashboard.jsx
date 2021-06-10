import React from "react";
import Categories from "./Categories";
import {Route} from "react-router"
import JobAdvertList from "../pages/JobAdvert/JobAdvertList";
import PositionList from "../pages/Position/PositionList";
import EmployerList from "../pages/Employer/EmployerList";
import ApplicationDetail from "../pages/JobApplication/ApplicationDetail";
import { Grid, GridColumn, GridRow } from "semantic-ui-react";
import JobAdvertDetail from "../pages/JobAdvert/JobAdvertDetail";

export default function Dashboard() {
  return (
    <div>
      <Grid>
        <GridRow>
          <GridColumn width={4}>
            <Categories/>
          </GridColumn>
          <GridColumn width={12}>
           <Route exact path="/" component={JobAdvertList}/>
           <Route exact path="/jobAdverts" component={JobAdvertList}/>
           <Route path="/jobAdverts/:id" component={JobAdvertDetail}/>
           <Route path="/positions" component={PositionList}/>
           <Route path="/employers" component={EmployerList}/>
           <Route path="/application" component={ApplicationDetail}/>
          </GridColumn>
        </GridRow>
      </Grid>
    </div>
  );
}
