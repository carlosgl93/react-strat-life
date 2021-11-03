import React, { useRef, useState, useContext } from "react";
import { useHistory, Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import AuthContext from "../store/auth_context";

const SignUp = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();
  const authCtx = useContext(AuthContext);
  const auth = getAuth();

  const emailRef = useRef();
  const password1Ref = useRef();
  const password2Ref = useRef();

  const handleSignUpSubmit = (event) => {
    event.preventDefault();
    const enteredEmail = emailRef.current.value;
    const enteredPassword1 = password1Ref.current.value;
    const enteredPassword2 = password2Ref.current.value;
    const userData = {
      email: enteredEmail,
      password: enteredPassword1,
    };

    if (enteredPassword1 === enteredPassword2) {
      setIsLoading(true);
      console.log(userData);
      createUserWithEmailAndPassword(auth, enteredEmail, enteredPassword1)
        .then((userCredential) => {
          setIsLoading(false);
          // Signed in
          const user = userCredential.user;
          const userToken = user.stsTokenManager.accessToken;
          authCtx.login(userToken);
          // history
          if (authCtx.token !== null) {
            history.replace("/");
          } else return;
        })
        .catch((error) => {
          setIsLoading(false);
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(`Oops there was an error: ${errorCode}: ${errorMessage}`);
        });
    } else {
      alert("Passwords dont match, please enter them carefully");
    }
  };
  return (
    <Container>
      <h2 className="text-center mt-4">Create an account</h2>
      <Form className="mt-4" onSubmit={handleSignUpSubmit}>
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
          <Form.Text>Password must be longer than 6 characters</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            required
            ref={password2Ref}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="Agree to terms and conditions"
            required
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
        <p className="mt-2 sign-up-link">Already have an account yet?</p>
        <Link to="/login">Login here!</Link>
      </Container>
    </Container>
  );
};

export default SignUp;
