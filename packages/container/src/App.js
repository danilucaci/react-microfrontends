import React, { lazy, Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";

const MarketingApp = lazy(() => import("./components/MarketingApp"));
const AuthApp = lazy(() => import("./components/AuthApp"));
import Header from "./components/Header";
import Progress from "./components/Progress";

const generateClassName = createGenerateClassName({
  productionPrefix: "co",
});

export default () => {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <BrowserRouter>
        <Header />
        <Suspense fallback={<Progress />}>
          <Switch>
            <Route path="/auth" component={AuthApp} />
            <Route exact path="/" component={MarketingApp} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </StylesProvider>
  );
};
