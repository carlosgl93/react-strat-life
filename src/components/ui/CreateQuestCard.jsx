import React, { useState } from "react";
import reactDom from "react-dom";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Form, FormLabel } from "react-bootstrap";

const CreateQuestCard = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div className="create">
      <Card xs={12} sm={12}>
        <Row sm={12} xs={12}>
          <Col className="text-center">
            <h3 className="text-center">Create a quest</h3>
            <Container fluid id="form-container" className="px-1">
              <form>
                <label htmlFor="title">Quest main task</label> <br />
                <input
                  type="text"
                  required
                  id="title"
                  style={{ width: "85%" }}
                ></input>{" "}
                <br />
                <label htmlFor="priority">Quest Priority</label> <br />
                <Form.Text id="priority_help_text" muted>
                  1 is the most important, 4 is the least important
                </Form.Text>
                <br />
                <input
                  type="radio"
                  id="priority1"
                  value="1"
                  name="quest_priority"
                  style={{ margin: "1vh 1vw" }}
                />
                <label htmlFor="priority1">1</label>
                <input
                  type="radio"
                  id="priority2"
                  value="2"
                  name="quest_priority"
                  style={{ margin: "1vh 1vw" }}
                />
                <label htmlFor="priority2">2</label>
                <input
                  type="radio"
                  id="priority3"
                  value="3"
                  name="quest_priority"
                  style={{ margin: "1vh 1vw" }}
                />
                <label htmlFor="priority3">3</label>
                <input
                  type="radio"
                  id="priority4"
                  value="4"
                  name="quest_priority"
                  style={{ margin: "1vh 1vw" }}
                />
                <label htmlFor="priority4">4</label>
                <Container fluid className="rewards px-0 my-3">
                  <label className="text-center">Rewards</label> <br />
                  <Row style={{ width: "100%" }} className="my-1    ">
                    <Col xs={6} sm={6} className="text-md-left">
                      <label htmlFor="emotional_reward">Emotional:</label>
                      <br />
                      <label htmlFor="emotional_reward">Financial:</label>
                      <br />
                      <label htmlFor="emotional_reward">Social:</label>
                      <br />
                      <label htmlFor="emotional_reward">Spiritual:</label>
                      <br />
                      <label htmlFor="emotional_reward">Occupational:</label>
                      <br />
                      <label htmlFor="emotional_reward">Physical:</label>
                      <br />
                      <label htmlFor="emotional_reward">Intellectual:</label>
                      <br />
                      <label htmlFor="emotional_reward">Environmental:</label>
                      <br />
                    </Col>
                    <Col xs={6} sm={6}>
                      <input
                        type="number"
                        id="emotional_reward"
                        min="-5"
                        max="5"
                        placeholder="-5 to 5"
                        style={{ height: "22.5px" }}
                      />
                      <br />
                      <input
                        type="number"
                        id="emotional_reward"
                        min="-5"
                        max="5"
                        placeholder="-5 to 5"
                        style={{ height: "22.5px" }}
                      />
                      <br />
                      <input
                        type="number"
                        id="emotional_reward"
                        min="-5"
                        max="5"
                        placeholder="-5 to 5"
                        style={{ height: "22.5px" }}
                      />
                      <br />
                      <input
                        type="number"
                        id="emotional_reward"
                        min="-5"
                        max="5"
                        placeholder="-5 to 5"
                        style={{ height: "22.5px" }}
                      />
                      <br />
                      <input
                        type="number"
                        id="emotional_reward"
                        min="-5"
                        max="5"
                        placeholder="-5 to 5"
                        style={{ height: "22.5px" }}
                      />
                      <br />
                      <input
                        type="number"
                        id="emotional_reward"
                        min="-5"
                        max="5"
                        placeholder="-5 to 5"
                        style={{ height: "22.5px" }}
                      />
                      <br />
                      <input
                        type="number"
                        id="emotional_reward"
                        min="-5"
                        max="5"
                        placeholder="-5 to 5"
                        style={{ height: "22.5px" }}
                      />
                      <br />
                      <input
                        type="number"
                        id="emotional_reward"
                        min="-5"
                        max="5"
                        placeholder="-5 to 5"
                        style={{ height: "22.5px" }}
                      />
                      <br />
                    </Col>
                  </Row>
                  <Button type="submit ">Create Quest</Button>
                </Container>
              </form>
            </Container>
          </Col>
        </Row>
      </Card>
      {/* <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Card>
          <Card.Header as="h5">
            <Row lg={2} md={2} sm={2} xs={1}>
              <Col>
                <Form.Group controlId="questTitle" className="mb-3">
                  <Form.Label>Enter the quest title</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Stretch lower body for 10 mins"
                    aria-label="qTitle"
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col className="text-center">
                <Form.Group controlId="questPriority">
                  <Form.Label></Form.Label>
                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      Priority
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.ItemText>
                        1 = Do now / 4 = Can wait
                      </Dropdown.ItemText>
                      <Dropdown.Item>1</Dropdown.Item>
                      <Dropdown.Item>2</Dropdown.Item>
                      <Dropdown.Item>3</Dropdown.Item>
                      <Dropdown.Item>4</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Form.Group>
              </Col>
            </Row>
          </Card.Header>
          <Card.Body>
            <Card.Text>
              Add rewards:
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Pillars affected
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>Emotional</Dropdown.Item>
                  <Dropdown.Item>Financial</Dropdown.Item>
                  <Dropdown.Item>Social</Dropdown.Item>
                  <Dropdown.Item>Spiritual</Dropdown.Item>
                  <Dropdown.Item>Occupational</Dropdown.Item>
                  <Dropdown.Item>Physical</Dropdown.Item>
                  <Dropdown.Item>Intellectual</Dropdown.Item>
                  <Dropdown.Item>Environmental</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <ul></ul>
            </Card.Text>
            <Button variant="primary">Create Quest</Button>
          </Card.Body>
        </Card>
      </Form> */}
    </div>
  );
};

export default CreateQuestCard;
