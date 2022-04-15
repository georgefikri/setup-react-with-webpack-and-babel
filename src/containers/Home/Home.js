import React from "react";
import { withTranslation } from "react-i18next";
import { connect } from "react-redux";
import { Button } from "../../components";

const home = ({}) => {
  return (
    <div className="home-page">
      <h1>this is the homepage</h1>
      <Button
        onClick={() => handleShow()}
        classes={"padding-5 border-0 add-contact-button"}
        icons={"far fa-user-plus"}
        iconsBoolean
        value={"click me"}
      />
    </div>
  );
};

// add state to props
const addToProps = (state) => {
  return {};
};
// add dispatch to props
const mapDispatchToProps = (dispatch) => {
  return {};
};
export const Home = connect(
  addToProps,
  mapDispatchToProps
)(withTranslation()(home));
