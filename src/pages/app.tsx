import * as React from "react";
import { Route, withRouter } from "react-router";
import { DashboardPage } from "./dashboard";
import { Page } from "./page";
import { ThemeProvider } from "@material-ui/core/styles";
import Theme from "../theme";

const AppComponent = () => {
  return (
    <ThemeProvider theme={Theme}>
      <Page>
        <Route component={DashboardPage} />
      </Page>
    </ThemeProvider>
  );
};

export const App = withRouter(AppComponent);
