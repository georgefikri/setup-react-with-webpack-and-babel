import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { withTranslation } from "react-i18next";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { Home } from "./Home/Home";

const rootContainer = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
};

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

export const RootContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(rootContainer));
