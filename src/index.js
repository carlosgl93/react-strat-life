import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.jsx";
// Importing the Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import { FirebaseAppProvider } from "reactfire";
import firebaseConfig from "./firebase_config";
import { AuthContextProvider } from "./store/auth_context";

ReactDOM.render(
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <Suspense>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </Suspense>
  </FirebaseAppProvider>,
  document.getElementById("root")
);
