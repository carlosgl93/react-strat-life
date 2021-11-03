import React, { useContext, useRef } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../store/auth_context";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { getAuth, updatePassword } from "@firebase/auth";

const ResetPassword = (props) => {
  const history = useHistory();
  const authCtx = useContext(AuthContext);
  const auth = getAuth();

  const newPasswordRef = useRef();
  const confirmPasswordRef = useRef();

  const handleResetPassword = (event) => {
    event.preventDefault();
    const resetPassword = newPasswordRef;
    const confirmResetPassword = confirmPasswordRef;
    const user = auth.currentUser;
    if (resetPassword === confirmResetPassword) {
      updatePassword(user, resetPassword).then(() => {
        alert("Password updated successfully");
        history.push("/login");
      });
    } else {
      alert("Passwords dont match");
    }
  };

  return (
    <Container>
      <Form onSubmit={handleResetPassword}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>New password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter your new password"
            ref={newPasswordRef}
          />
          <Form.Text className="text-muted">
            This will be your new password, it must be longer than 6 characters
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Repeat your new password"
            ref={confirmPasswordRef}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Reset Password
        </Button>
      </Form>
    </Container>
  );
};

export default ResetPassword;
