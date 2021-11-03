import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.jsx";
// Importing the Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import { FirebaseAppProvider } from "reactfire";
import firebaseConfig from "./firebase_config";
import { AuthContextProvider } from "./store/auth_context";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <Suspense fallback={"Loading"}>
      <AuthContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AuthContextProvider>
    </Suspense>
  </FirebaseAppProvider>,
  document.getElementById("root")
);
