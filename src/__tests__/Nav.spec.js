import React from "react";
import "jest-styled-components";
import TestRenderer from "react-test-renderer";
import Nav from "../components/Nav";
import { Provider } from "react-redux";
import store from "../redux/store";
import { HashRouter } from "react-router-dom";
import Auth from "../components/Auth";

import { shallow } from "enzyme";

describe("<Nav /> with no props", () => {
  const container = shallow(<Auth />);

  it("should match the snapshot", () => {
    expect(container.html()).toMatchSnapshot();
  });
});
