import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from './App';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import loadable from "@loadable/component";
import Loader from "./components/loader/loader";

import ErrorBoundary from "./errorBoundary/errorBoundary";

const App = loadable(() => import("./App"), {
  fallback: <Loader />,
});

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </PersistGate>
    </BrowserRouter>
  </Provider>
);

// ReactDOM.render(
//   <Provider store={store}>
//     <BrowserRouter>
//       <PersistGate persistor={persistor}>
//         <App />
//       </PersistGate>
//     </BrowserRouter>
//   </Provider>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
