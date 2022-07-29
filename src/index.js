import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { ToggleProvider } from "./context/toggle.context";
import { DarkModeProvider } from "./context/dark-mode.context";
import { store } from "./store/store";
import { Provider } from "react-redux";
import { Elements } from "@stripe/react-stripe-js";
import { stripePromise } from "./utils/stripe/stripe.utils";
import { InMemoryCache, ApolloClient, ApolloProvider } from "@apollo/client";
import { WhishListProvider } from "./context/wish-list.context";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Provider store={store}>
        <DarkModeProvider>
          <BrowserRouter>
            <ToggleProvider>
              <Elements stripe={stripePromise}>
                <WhishListProvider>
                  <App />
                </WhishListProvider>
              </Elements>
            </ToggleProvider>
          </BrowserRouter>
        </DarkModeProvider>
      </Provider>
    </ApolloProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
