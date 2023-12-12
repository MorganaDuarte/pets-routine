import { Form, Button, Table, Tab, Tabs } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState, ChangeEvent } from "react";
import { IDog } from "../../../types/dogs";
import { v4 as uuidv4 } from 'uuid';

export default function Create() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    race: "",
    birthDate: "",
    id: uuidv4()
  });
  const [vaccineRows, setVaccineRows] = useState([
    { vaccine: 'Raiva', appliedDate: '', replicateDate: '' },
    { vaccine: 'V10', appliedDate: '', replicateDate: '' }
  ]);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
      id: uuidv4()
    }));
  };
  const handleAddRow = () => {
    setVaccineRows((prevRows) => [
      ...prevRows,
      { vaccine: '', appliedDate: '', replicateDate: '' }
    ]);
  };
  function navigateToProfile(dog: IDog ) {
    navigate(`/profile/${dog.id}`, { state: { dog } })
  }
  const save = () => {
    const savedPets = localStorage.getItem("pets");
    const pets = savedPets ? JSON.parse(savedPets) : [];
    console.log(pets)
    pets.push(formData)
    localStorage.setItem("pets", JSON.stringify(pets));
    navigateToProfile(formData);
  }
  return(
    <>
      <Form className="mt-4" onSubmit={save}>
        <Form.Group className="mb-3">
          <Form.Label>Nome</Form.Label>
          <Form.Control placeholder="Nome" name="name" value={formData.name} onChange={handleChange}/>
          <Form.Label>Raça</Form.Label>
          <Form.Control placeholder="Raça" name="race" value={formData.race} onChange={handleChange}/>
          <Form.Label>Data de Nascimento</Form.Label>
          <Form.Control placeholder="mm/aaaa" name="birthDate" value={formData.birthDate} onChange={handleChange}/>
        </Form.Group>
        <Tabs defaultActiveKey="vaccine" transition={false} id="noanim-tab-example" className="mb-3">
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
                {vaccineRows.map((row, index) => (
                  <tr key={index}>
                    <td><Form.Control placeholder={row.vaccine} /></td>
                    <td><Form.Control placeholder="dd/mm/aaaa" defaultValue={row.appliedDate} /></td>
                    <td><Form.Control placeholder="dd/mm/aaaa" defaultValue={row.replicateDate} /></td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <Button variant="primary" onClick={handleAddRow}>Adicionar nova vacina</Button>
          </Tab>
          <Tab eventKey="worms" title="Vermes">
            Tab content for Profile
          </Tab>
        </Tabs>
        <div className="d-flex justify-content-end">
          <Button variant="dark" type="submit">Salvar</Button>
        </div>
      </Form>
    </>
  )
}