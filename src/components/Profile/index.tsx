import { Form, Tab, Table, Tabs } from "react-bootstrap";
import { useLocation } from "react-router-dom";

interface Vaccines {
  vaccine: string,
  appliedDate: string,
  replicateDate: string
}

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
        <Tabs defaultActiveKey="vaccine" transition={false} className="mb-3">
          <Tab eventKey="vaccine" title="Vacinas">
            <Table striped bordered hover size="sm">
              <thead>
              <tr>
                <th></th>
                <th>Aplicada em</th>
                <th>Replicar em</th>
              </tr>
              </thead>
              <tbody>
              {dog.vaccines.map((dog: Vaccines, index: number ) => (
                <tr key={index}>
                  <td><Form.Control defaultValue={dog.vaccine} /></td>
                  <td><Form.Control defaultValue={dog.appliedDate} /></td>
                  <td><Form.Control defaultValue={dog.replicateDate} /></td>
                </tr>
              ))}
              </tbody>
            </Table>
          </Tab>
          <Tab eventKey="worms" title="Vermes">
            Tab content for Profile
          </Tab>
        </Tabs>
      </Form>
    </>
  )
}