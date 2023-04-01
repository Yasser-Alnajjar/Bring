import { Container } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";

export default function Modals({ title, children, size }) {
  const { layout } = useSelector((state) => state);
  const dispatch = useDispatch();

  // const handleClose = () => dispatch(closeModal());

  return (
    <>
      <Modal
        className="d-flex align-items-center"
        show={layout.modals}
        // onHide={handleClose}
        size={size}
        style={{ overflowY: "auto" }}
      >
        <Container>
          <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
        </Container>
        <Modal.Body>{children}</Modal.Body>
      </Modal>
    </>
  );
}
