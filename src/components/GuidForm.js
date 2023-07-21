import check from "../images/check-icon.png";
import { useState } from "react";
import { Image, Form, Button, Alert } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRefresh } from "@fortawesome/free-solid-svg-icons";

function GuidForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        setIsError(false);
        setIsSuccess(false);
        const guid = e.target[0].value;
        setIsSubmitting(true);
        setTimeout(() => {
          const regex = /^[0-9]{8}-[a-z]{4}-[a-z]{4}-[a-z]{12}/;
          if (regex.test(guid)) {
            setIsSuccess(true);
            setIsError(false);
          } else {
            setIsError(true);
            setIsSuccess(false);
          }
          setIsSubmitting(false);
        }, 2000);
      }}
    >
      <Form.Group controlId="guid" className="mb-3">
        <Form.Label for="guid">
          <span>Enter a valid guid here.</span>
          {isError && (
            <span style={{ display: "inline-block" }}>
              <Alert variant={"danger"}>
                <span
                  style={{
                    color: "#d0211e",
                    fontWeight: "500",
                    padding: "5px",
                  }}
                >
                  GUID Invalid
                </span>
              </Alert>
            </span>
          )}
        </Form.Label>
        <input
          type="text"
          className="form-control border-radius-30"
          id="guid"
          aria-describedby="guid"
          disabled={isSubmitting}
          name="guid"
        />
      </Form.Group>
      <Button
        variant={"warning"}
        className="border-radius-30 btn-gradiant"
        disabled={isSubmitting}
        type="sumbit"
      >
        {isSubmitting && (
          <span>
            <FontAwesomeIcon icon={faRefresh} spin />
          </span>
        )}
        {isSuccess && (
          <span>
            <Image src={check} className="img-icon" />
          </span>
        )}
        <span className="padding-20">Submit</span>
      </Button>
    </Form>
  );
}

export default GuidForm;
