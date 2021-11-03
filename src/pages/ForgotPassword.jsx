import React, { useContext, useRef } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../store/auth_context";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { getAuth, sendPasswordResetEmail } from "@firebase/auth";

const ForgotPassword = (props) => {
  const history = useHistory();
  const authCtx = useContext(AuthContext);
  const auth = getAuth();
  console.log(auth);

  const emailRef = useRef();

  const handleSendResetPasswordEmail = (event) => {
    event.preventDefault();
    const enteredEmail = emailRef.current.value;
    console.log(enteredEmail);
    sendPasswordResetEmail(auth, enteredEmail)
      .then(alert("Go to your email to proceed"))
      .catch((error) => {
        alert(error.code);
      });
  };

  return (
    <Container>
      <Form onSubmit={handleSendResetPasswordEmail}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>
            Enter the email account that you want to reset
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="youraccount@example.com"
            ref={emailRef}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Send Reset Password Email
        </Button>
      </Form>
    </Container>
  );
};

export default ForgotPassword;
