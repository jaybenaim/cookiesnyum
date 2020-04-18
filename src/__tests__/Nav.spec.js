import React from "react";
import "jest-styled-components";
import renderer from "react-test-renderer";
import Nav from "../components/Nav";
import { Provider } from "react-redux";
import store from "../redux/store";
import { HashRouter } from "react-router-dom";

describe("Nav", () => {
  it("should be primary color", () => {
    console.log = jest.fn();
    const tree = renderer
      .create(
        <Provider store={store}>
          <HashRouter basename="/dolcenada">
            <Nav />
          </HashRouter>
        </Provider>
      )
      .toJSON();
    const treeInstance = tree.root;

    expect(tree).toMatchSnapshot();
  });
});
