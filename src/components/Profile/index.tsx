import { Form } from "react-bootstrap";
import { useLocation } from "react-router-dom";

export default function Profile() {
  const location = useLocation();
  const { dog } = location.state;
  return(
    <>
      <Form className="mt-4">
        <Form.Group className="mb-3">
          <Form.Label>Nome</Form.Label>
          <Form.Control type="text" defaultValue={dog.name} />
          <Form.Label>Raça</Form.Label>
          <Form.Control defaultValue={dog.race} />
          <Form.Label>Data de Nascimento</Form.Label>
          <Form.Control defaultValue={dog.birthDate} />
        </Form.Group>
      </Form>
    </>
  )
}