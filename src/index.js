import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {makeServer} from "./server";
import {BrowserRouter as Router} from "react-router-dom";
import {
  AuthProvider,
  UserDataProvider,
  ThemeProvider,
  MobileMenuProvider,
} from "./context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <UserDataProvider>
          <ThemeProvider>
            <MobileMenuProvider>
              <App />
            </MobileMenuProvider>
          </ThemeProvider>
        </UserDataProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
