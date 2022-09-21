import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import facebook from "../icons/facebook-icon.svg";
import instagram from "../icons/insta-icon.svg";

function Subscribe() {
  return (
    <div className="subscribe-container">
      <Form className="form">
        <h3>Subscribe to our newsletter!</h3>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicMessage">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter Password" />
        </Form.Group>
        <Button variant="primary" type="button" className="hero-btn">
          Subscribe
        </Button>
      </Form>
      <div className="contact-container">
        <h1>PETSY</h1>
        <h3>Questions or comments</h3>
        <p>email@petsy.com</p>
        <p>760-239-3381 (Mon - Fri 9am-4pm PST) </p>
        <h3>Order Info & Returns</h3>
        <p>returns@petsy.bz</p>
        <p>760-239-3381 (Mon - Fri 9am-4pm PST) </p>
        <div className="social-icons">
          <img alt="facebook" src={facebook} className="social-icon" />
          <img alt="instagram" src={instagram} className="social-icon" />
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
