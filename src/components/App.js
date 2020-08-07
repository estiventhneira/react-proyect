import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import BadgesNew from "../pages/BadgesNew.js";
import Badges from "../pages/Badges";
import Layout from "../components/Layout";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import BadgesEdit from "../pages/BadgesEdit";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/badges" component={Badges} />
          <Route exact path="/badges/new" component={BadgesNew} />
          <Route exact path="/badges/:BadgeId/edit" component={BadgesEdit} />
          <Route path="/404" component={NotFound} />
          <Redirect from="*" to="/404" />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
