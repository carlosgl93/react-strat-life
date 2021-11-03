import React, { useRef, useState, useContext, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import AuthContext from "../store/auth_context";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();
  const authCtx = useContext(AuthContext);
  const emailRef = useRef();
  const password1Ref = useRef();
  const auth = getAuth();

  const handleLoginSubmit = (event) => {
    setIsLoading(true);
    event.preventDefault();
    const enteredEmail = emailRef.current.value;
    const enteredPassword1 = password1Ref.current.value;
    signInWithEmailAndPassword(auth, enteredEmail, enteredPassword1)
      .then((userCredential) => {
        // Signed in
        setIsLoading(false);

        const user = userCredential.user;
        const userToken = user.stsTokenManager.accessToken;
        authCtx.login(userToken);
        console.log(authCtx);

        // history
        if (user) {
          history.replace("/");
        } else return;
      })
      .catch((error) => {
        setIsLoading(false);
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(`Oops there was an error: ${errorCode}: ${errorMessage}`);
      });
  };

  useEffect(() => {}, [authCtx]);

  return (
    <Container>
      <h2 className="text-center mt-4">Login</h2>
      <Form className="mt-4" onSubmit={handleLoginSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            required
            ref={emailRef}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            required
            ref={password1Ref}
          />
        </Form.Group>

        {!isLoading && (
          <Button variant="primary" type="submit">
            Submit
          </Button>
        )}
        {isLoading && (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        )}
      </Form>
      <Container>
        <p className="sign-up-link">Don't have an account yet?</p>
        <Link to="/sign-up">Create one here!</Link>
      </Container>
    </Container>
  );
};

export default Login;
