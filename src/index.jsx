import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { HashRouter } from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import store from "./redux/store";
import { unregister } from "./registerServiceWorker";
import ErrorBoundary from "./components/ErrorBoundary";
import { createBrowserHistory } from "history";

import "bootstrap/dist/css/bootstrap.min.css";

const customHistory = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <HashRouter basename="/dolcenada" history={customHistory}>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </HashRouter>
  </Provider>,
  document.getElementById("root")
);

/**
 * Be aware that the website will only update to the latest version on the 2nd page visit if it as already cached
 * Learn more about service workers in React: https://create-react-app.dev/docs/making-a-progressive-web-app
 */
unregister();
// registerServiceWorker();
