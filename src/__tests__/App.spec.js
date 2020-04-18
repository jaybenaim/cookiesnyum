import React from "react";
import { Provider } from "react-redux";
import store from "../redux/store";
import App from "../App";
import renderer from "react-test-renderer";

import { HashRouter } from "react-router-dom";
import ErrorBoundary from "../components/ErrorBoundary";

describe("App", () => {
  test("App renders", () => {
    console.log = jest.fn();
    const component = renderer.create(
      <Provider store={store}>
        <HashRouter basename="/dolcenada">
          <ErrorBoundary>
            <App />
          </ErrorBoundary>
        </HashRouter>
      </Provider>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    expect(console.log).toHaveBeenCalled();
  });
});
