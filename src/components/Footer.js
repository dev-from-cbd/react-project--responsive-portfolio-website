import { Container } from "react-bootstrap";
import MailchimpSubscribe from "react-mailchimp-subscribe";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-item-center">
          <MailchimpSubscribe />
          <Col sm={6}>Col</Col>
        </Row>
      </Container>
    </footer>
  );
};
